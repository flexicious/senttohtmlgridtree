/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */
(function(window)
{

    /**
     * A JavaScript only version of the Pager control that significantly cuts down on
     * initialization time. It does so by using pure ActionScript opposed to MXML,
     * not using as many nested HBoxes, and not using plain events instead databindings to modify appearance.
     * @constructor
     * @class PagerControl
     * @namespace flexiciousNmsp
     * @extends TypedObject
     */
    var PagerControl=function(){
        flexiciousNmsp.UIComponent.apply(this,["span"]);
        this.addEventListener(this,flxConstants.EVENT_CLICK,
            function(e){
                if(e.triggerEvent.target.className.indexOf('toolbarButtonIconCell')>=0){
                    if(e.triggerEvent.target.className.indexOf('disabled')>=0)return;
                    var children = uiUtil.adapter.findElementsWithClassName(this.domElement,"toolbarButtonIconCell");
                    var actionIdx = children.indexOf(e.triggerEvent.target);
                    var action = this.grid.toolbarActions[actionIdx];
                    this.grid.runToolbarAction(action,e.triggerEvent.target,this);
                }
            }
        )
        uiUtil.attachClass(this.domElement,"flexiciousGridPager");

        this._pageIndex = 0;
        this._totalRecords=0;
        this._pageSize=10;

        this.level=null;
        this.rowInfo=null;
        this.grid=null;
    };
    var p = PagerControl.prototype= new flexiciousNmsp.UIComponent();
    PagerControl.prototype.typeName=PagerControl.typeName="PagerControl";
    var uiUtil=flexiciousNmsp.UIUtils;
    var flxConstants=flexiciousNmsp.Constants;
    PagerControl.prototype.getClassNames=function(){
        return ["PagerControl","UIComponent","IExtendedPager"];
    };
    PagerControl.prototype.doDispatchEvents=true;
    PagerControl.prototype.getPageSize=function()
    {
        return this._pageSize;
    };
    PagerControl.prototype.setPageSize=function (val)
    {
        this._pageSize=val;
    };

    PagerControl.prototype.getPageIndex=function()
    {
        return this._pageIndex;
    };
    PagerControl.prototype.setPageIndex=function (val)
    {
        if(this._pageIndex != val){
            this._pageIndex = val;
            this.onPageChanged();
            this.dispatchEvent(new flexiciousNmsp.FlexDataGridEvent("pageIndexChanged"));
        }
    };
    PagerControl.prototype.setTotalRecords=function(val)
    {
        this._totalRecords = val;
        this.setPageIndex(0);
        this.dispatchEvent( new flexiciousNmsp.FlexDataGridEvent("reset"));
        this.refresh();
    };
    PagerControl.prototype.getTotalRecords=function (){
        return this._totalRecords;
    };




    /**
     * Default handler for the First Page Navigation Button
     */
    PagerControl.prototype.onImgFirstClick=function(){
        {
            this._pageIndex = 0;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Previous Page Navigation Button
     */
    PagerControl.prototype.onImgPreviousClick=function(){
        if(this._pageIndex > 0)
        {
            this._pageIndex--;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Next Page Navigation Button
     */
    PagerControl.prototype.onImgNextClick=function(){

        if(this._pageIndex < this.getPageCount()-1)
        {
            this._pageIndex++;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Last Page Navigation Button
     */
    PagerControl.prototype.onImgLastClick=function(){
        if(this._pageIndex < this.getPageCount()-1)
        {
            this._pageIndex = this.getPageCount()-1;
            this.onPageChanged();
        }

    };
    /**
     * Default handler for the Page Change Combo Box
     */
    PagerControl.prototype.onPageCbxChange=function(event){
        this._pageIndex = parseInt(event.target.value)-1;
        this.onPageChanged();

    };
    /**
     * Default handler for the Page Change Event
     */
    PagerControl.prototype.onPageChanged=function(){
        var pageDropDown=this.getPageDropdown();
        if(pageDropDown&& (pageDropDown.selectedIndex != (this._pageIndex)))
        {
            pageDropDown.selectedIndex=this._pageIndex;
        }
        if(this.doDispatchEvents)
            this.dispatchEvent(new flexiciousNmsp.ExtendedFilterPageSortChangeEvent(flexiciousNmsp.ExtendedFilterPageSortChangeEvent.PAGE_CHANGE));
    };

    PagerControl.prototype.onCreationComplete=function(event){
        //btnSettings.visible=btnSettings.includeInLayout=_grid.enablePreferencePersistence;
        if(this.grid.enableToolbarActions){
            //this.grid.toolbarActions.addEventListener(flexiciousNmsp.ArrayCollection.EVENT_COLLECTION_CHANGE,this.onToolbarActionsChanged);
            this.grid.addEventListener(flexiciousNmsp.FlexDataGridEvent.CHANGE,this.onGridSelectionChange);
            this.createToolbarActions();
        }
    };
    /**
     * Sets the page index to 1(0), dispatches the reset event.
     */
    PagerControl.prototype.reset=function(){
        this._pageIndex=0;
        this.getPageDropdown().selectedIndex=0;
        this.dispatchEvent(new flexiciousNmsp.FlexDataGridEvent("reset"));
    };
    PagerControl.prototype.getPageStart=function(){
        return this._totalRecords==0?0:((this._pageIndex)*this._pageSize)+1;

    };
    PagerControl.prototype.getPageEnd=function(){
        var val= (this._pageIndex+1)*this._pageSize;
        return (val>this._totalRecords)?this._totalRecords:val;

    };
    PagerControl.prototype.getPageCount=function(){
        return this.getPageSize()>0?Math.ceil(this.getTotalRecords()/this.getPageSize()):0;

    };

    /**
     * Default handler for the Word Export Button. Calls
     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create(ExportOptions.DOC_EXPORT))
     */
    PagerControl.prototype.onWordExport=function(){
        this.grid.toolbarWordHandlerFunction();

    };
    /**
     * Default handler for the Word Export Button. Calls
     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create())
     */
    PagerControl.prototype.onExcelExport=function(){
        this.grid.toolbarExcelHandlerFunction();

    };
    /**
     * Default handler for the Print Button. Calls
     * var po:PrintOptions=PrintOptions.create();
     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
     * ExtendedPrintController.instance().print(this.grid,po)
     */
    PagerControl.prototype.onPrint=function(){
        this.grid.toolbarPrintHandlerFunction();

    };
    /**
     * Default handler for the Print Button. Calls
     * var po:PrintOptions=PrintOptions.create(true);
     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
     * ExtendedPrintController.instance().print(this.grid,po)
     */
    PagerControl.prototype.onPdf=function(){
        this.grid.toolbarPdfHandlerFunction();

    };
    /**
     * Default handler for the Clear Filter Button.
     * Calls grid.clearFilter()
     */
    PagerControl.prototype.onClearFilter=function(){
        this.grid.clearFilter()

    };
    /**
     * Default handler for the Process Filter Button.
     * Calls grid.processFilter()
     */
    PagerControl.prototype.onProcessFilter=function(){
        this.grid.processFilter();

    };
    /**
     * Default handler for the Show Hide Filter Button.
     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
     */
    PagerControl.prototype.onShowHideFilter=function(){
        this.grid.setFilterVisible(!this.grid.getFilterVisible());
        this.grid.rebuild()
    };
    /**
     * Default handler for the Show Hide Filter Button.
     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
     */
    PagerControl.prototype.onShowHideFooter=function(){
        this.grid.footerVisible=!this.grid.footerVisible;this.grid.placeSections()
    };
    /**
     * Default handler for the Settings Popup
     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    PagerControl.prototype.onShowSettingsPopup=function(){
        var popup=this.grid.popupFactorySettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,flxConstants.SETTINGS_POPUP_TITLE);
    };

    /**
     * Default handler for the OPen Settings Popup
     * Calls var popup:OpenSettingsPopup=new OpenSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    PagerControl.prototype.onOpenSettingsPopup=function(){
        var popup=this.grid.popupFactoryOpenSettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,flxConstants.OPEN_SETTINGS_POPUP_TITLE);
    };

    /**
     * Default handler for the Save Settings Popup
     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
     */
    PagerControl.prototype.onSaveSettingsPopup=function(){
        var popup=this.grid.popupFactorySaveSettingsPopup.newInstance();
        popup.setGrid(this.grid);
        uiUtil.addPopUp(popup,this.grid,false,null,flxConstants.SAVE_SETTINGS_POPUP_TITLE);
    };
    PagerControl.prototype.createToolbarActions=function (){

    };

    PagerControl.prototype.onToolbarActionsChanged=function (event){
        this.createToolbarActions();
    };

    PagerControl.prototype.onGridSelectionChange=function (event){

    };

    PagerControl.prototype.toolbarActionFilterFunction=function (item){
        return item.level==this.level.getNestDepth() || item.level==-1;

    };

    PagerControl.prototype.getPageDropdown=function(){
        return uiUtil.adapter.findElementWithClassName(this.domElement,"pageDropdown");
    };
    PagerControl.prototype.destroy=function(){
        this.destroyButtons([PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_PREV_PAGE,
            PagerControl.ACTION_NEXT_PAGE,
            PagerControl.ACTION_LAST_PAGE,
            PagerControl.ACTION_SORT,
            PagerControl.ACTION_SETTINGS,
            PagerControl.ACTION_SAVE_SETTINGS,
            PagerControl.ACTION_FILTER_SHOW_HIDE,
            PagerControl.ACTION_RUN_FILTER,
            PagerControl.ACTION_CLEAR_FILTER,
            PagerControl.ACTION_PRINT,
            PagerControl.ACTION_PDF,
            PagerControl.ACTION_WORD,
            PagerControl.ACTION_EXCEL,
            PagerControl.ACTION_CUSTOM_PRINT
        ]);
        var pageDropDown=this.getPageDropdown();
        if(pageDropDown){
            pageDropDown.pagerControl=null;
            uiUtil.removeDomEventListener(pageDropDown,"change",onPageDropdownChange)
        }

    };


    PagerControl.prototype.addToolbarActionsHTML=function () {
        var html="";
        var gridId=this.grid.id||this.grid.domElement.id;
        for (var i = 0; i < this.grid.toolbarActions.length; i++) {
            var tca = this.grid.toolbarActions[i];
            html+=(tca.seperatorBefore?"<span id='"+gridId+"_"+tca.code+"' class='pagerDiv separatorCell'>|</span>":"");
            html+=("<span valign='middle' class='pagerDiv iconCell toolbarButtonIconCell'  " +
                "title='"+tca.tooltip+"'" + (tca.iconUrl?"style='background: transparent url(" +
                tca.iconUrl + ") no-repeat left center;padding-left:20px' >":">")+ tca.name +  "</span>");
            html+=(tca.seperatorAfter?"<span  class='pagerDiv separatorCell'>|</span>":"")
        }
        return html;
    };
    PagerControl.prototype.updateDisplayList=function(w,h){

        flexiciousNmsp.UIComponent.prototype.updateDisplayList.apply(this,[w,h]);
        this.refresh();
    };
    PagerControl.prototype.initialize=function(){
        var gridId=this.grid.id||this.grid.domElement.id;
        gridId+="_";

        var html="<span class='pagerTable' style='float: left;height:"+this.getHeight()+"px'>" +
            (this.level.enablePaging?"<span  class='pagerDiv pageInfo'></span>" :"")+
            (this.level.enablePaging?"<span  class='pagerDiv toolbarButtonDiv lineSep'>&nbsp;</span>":"")+
            (this.level.enablePaging?"<span  id='"+gridId+"btnFirstPage' class='pagerDiv iconCell firstPage'><img alt='First Page' tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/firstPage.png' class='imageButtonFirstPage' alt='"+flxConstants.PGR_BTN_FIRST_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_FIRST_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  id='"+gridId+"btnPreviousPage' class='pagerDiv iconCell prevPage'><img alt='Previous Page' tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/prevPage.png' class='imageButtonPrevPage' alt='"+flxConstants.PGR_BTN_PREV_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PREV_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  id='"+gridId+"btnNextPage' class='pagerDiv iconCell nextPage'><img alt='Next Page' tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/nextPage.png' class='imageButtonNextPage' alt='"+flxConstants.PGR_BTN_NEXT_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_NEXT_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  id='"+gridId+"btnLastPage' class='pagerDiv iconCell lastPage'><img alt='Last Page' tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/lastPage.png' class='imageButtonLastPage' alt='"+flxConstants.PGR_BTN_LAST_PAGE_TOOLTIP+"' title='"+flxConstants.PGR_BTN_LAST_PAGE_TOOLTIP+"'></span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv lineSep'>&nbsp;</span>":"")+
            (this.level.enablePaging?"<span  id='"+gridId+"lblGotoPage'  class='pagerDiv  gotoPage'>"+flexiciousNmsp.Constants.PGR_LBL_GOTO_PAGE_TEXT+" <select class='pageDropdown'> </select> </span>":"")+
            (this.level.enablePaging?"<span  class='pagerDiv lineSep'>&nbsp;</span>":"")+
            "</span>";
            html+="<span class='pagerTable' style='float: right;height:"+this.getHeight()+"px'>" +
            this.addToolbarActionsHTML()+

            "<span  id='"+gridId+"btnCustomPrint' class='pagerDiv  iconCell'><span class='imageButtonCustomPrint' title='Print'>Print</span></span>";


        if(this.level.getNestDepth()==1){
                html+=
                    (this.grid.enableDrillDown?"<span  id='"+gridId+"btnCollapseOne' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/collapseOne.png' class='imageButtonExpandUp' alt='"+flxConstants.PGR_BTN_EXP_ONE_UP_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ONE_UP_TOOLTIP+"'></span>":"")+
                    (this.grid.enableDrillDown?"<span  id='"+gridId+"btnExpandOne' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/expandOne.png' class='imageButtonExpandDown' alt='"+flxConstants.PGR_BTN_EXP_ONE_DOWN_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ONE_DOWN_TOOLTIP+"'></span>":"")+
                    (this.grid.enableDrillDown?"<span  class='pagerDiv  lineSep'>&nbsp;</span>":"")+
                    (this.grid.enableDrillDown?"<span  id='"+gridId+"btnCollapseAll' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/collapseAll.png' class='imageButtonCollapseAll' alt='"+flxConstants.PGR_BTN_COLLAPSE_ALL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_COLLAPSE_ALL_TOOLTIP+"'></span>":"")+
                    (this.grid.enableDrillDown?"<span  id='"+gridId+"btnExpandAll' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/expandAll.png' class='imageButtonExpandAll' alt='"+flxConstants.PGR_BTN_EXP_ALL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXP_ALL_TOOLTIP+"'></span>":"")+
                    (this.grid.enableDrillDown?"<span  class='pagerDiv  lineSep'>&nbsp;</span>":"")+

                    (this.grid.enableMultiColumnSort?"<span  id='"+gridId+"btnSort' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/sort.png' class='imageButtonSort' alt='"+flxConstants.PGR_BTN_SORT_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SORT_TOOLTIP+"'></span>":"")+
                    (this.grid.enableMultiColumnSort?"<span  class='pagerDiv  lineSep'>&nbsp;</span>":"")+
                    (this.grid.enablePreferencePersistence?"<span  id='"+gridId+"btnSettings' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/settings.png' class='imageButtonSettings' alt='"+flxConstants.PGR_BTN_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SETTINGS_TOOLTIP+"'></span>":"")+
                    (this.grid.enablePreferencePersistence&&this.grid.enableMultiplePreferences?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/openSettings.png' class='imageButtonOpenSettings' alt='"+flxConstants.PGR_BTN_OPEN_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_OPEN_SETTINGS_TOOLTIP+"'></span>":"")+
                    (this.grid.enablePreferencePersistence?"<span  id='"+gridId+"btnSaveSettings' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/saveSettings.png' class='imageButtonSaveSettings' alt='"+flxConstants.PGR_BTN_SAVE_SETTINGS_TOOLTIP+"' title='"+flxConstants.PGR_BTN_SAVE_SETTINGS_TOOLTIP+"'></span>":"")+
                    (this.grid.enablePreferencePersistence?"<span  class='pagerDiv  lineSep'>&nbsp;</span>":"")+
                    (this.level.getEnableFilters()?"<span  id='"+gridId+"btnFilterShowHide' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/filterShowHide.png' class='imageButtonFilterShowHide' alt='"+flxConstants.PGR_BTN_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_FILTER_TOOLTIP+"r'></span>":"")+
                    (this.level.getEnableFilters()?"<span  id='"+gridId+"btnFilter' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/filter.png' class='imageButtonFilter' alt='"+flxConstants.PGR_BTN_RUN_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_RUN_FILTER_TOOLTIP+"'></span>":"")+
                    (this.level.getEnableFilters()?"<span  id='"+gridId+"btnClearFilter' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/clearFilter.png' class='imageButtonClearFilter' alt='"+flxConstants.PGR_BTN_CLEAR_FILTER_TOOLTIP+"' title='"+flxConstants.PGR_BTN_CLEAR_FILTER_TOOLTIP+"'></span>":"")+
                    (this.level.getEnableFilters()?"<span  class='pagerDiv  lineSep'>&nbsp;</span>":"")+
                    (this.grid.enablePrint?"<span  id='"+gridId+"btnPrint' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/print.png' class='imageButtonPrint' alt='"+flxConstants.PGR_BTN_PRINT_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PRINT_TOOLTIP+"'></span>":"")+
                    (this.grid.enablePdf?"<span  class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/pdf.png' class='imageButtonPdf' alt='"+flxConstants.PGR_BTN_PDF_TOOLTIP+"' title='"+flxConstants.PGR_BTN_PDF_TOOLTIP+"'></span>":"")+
                    (this.grid.enablePrint||this.level.enablePdf?"<span  class='pagerDiv  separatorCell'>&nbsp;</span>":"")+
                    (this.grid.enableExport?"<span  id='"+gridId+"btnWord' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/word.png' class='imageButtonWord' alt='"+flxConstants.PGR_BTN_WORD_TOOLTIP+"' title='"+flxConstants.PGR_BTN_WORD_TOOLTIP+"'></span>":"")+
                    (this.grid.enableExport?"<span  id='"+gridId+"btnExcel' class='pagerDiv  iconCell'><img tabindex='0' src='" + this.grid.getThemeToolbarIconFolder() + "/export.png' class='imageButtonExcel' alt='"+flxConstants.PGR_BTN_EXCEL_TOOLTIP+"' title='"+flxConstants.PGR_BTN_EXCEL_TOOLTIP+"'></span>":"")+
                    //(this.grid.enableExport?"<div class='pagerDiv  '>|</span>":"")+
                    "</span>";
            };
        this.setInnerHTML(html);
        this.initializeButtons([PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_FIRST_PAGE,
            PagerControl.ACTION_PREV_PAGE,
            PagerControl.ACTION_NEXT_PAGE,
            PagerControl.ACTION_LAST_PAGE,
            PagerControl.ACTION_SORT,
            PagerControl.ACTION_SETTINGS,
            PagerControl.ACTION_OPEN_SETTINGS,
            PagerControl.ACTION_SAVE_SETTINGS,
            PagerControl.ACTION_OPEN_SETTINGS,
            PagerControl.ACTION_FILTER_SHOW_HIDE,
            PagerControl.ACTION_RUN_FILTER,
            PagerControl.ACTION_CLEAR_FILTER,
            PagerControl.ACTION_PRINT,
            PagerControl.ACTION_PDF,
            PagerControl.ACTION_WORD,
            PagerControl.ACTION_EXCEL,
            PagerControl.ACTION_EXPAND_UP,
            PagerControl.ACTION_EXPAND_ALL,
            PagerControl.ACTION_EXPAND_DOWN,
            PagerControl.ACTION_COLLAPSE_ALL,
            PagerControl.ACTION_CUSTOM_PRINT
        ]);
        var pageDropDown=this.getPageDropdown();
        if(this.level.enablePaging){
            pageDropDown.pagerControl=this;
            uiUtil.addDomEventListener(this,pageDropDown,"change",onPageDropdownChange)
        }

        this.grid.addEventListener(this,flexiciousNmsp.FlexDataGrid.EVENT_CHANGE,this.refresh);
        flexiciousNmsp.UIComponent.prototype.initialize.apply(this );

    }
    PagerControl.prototype.enableDisableButton=function(button, enabled) {
        button.enabled = enabled;
        if (!button.enabled){
            uiUtil.attachClass(button, "disabled")
            var img = uiUtil.adapter.findFirstElementByTagName(button,"IMG");
            if(img){
                uiUtil.detachClass(img, "over")
                //this.grid.domElement.focus();
            }
        }
        else
            uiUtil.detachClass(button, "disabled")
    }
    PagerControl.prototype.rebuild=function(){
        this.invalidateDisplayList();
    };
    PagerControl.prototype.refresh=function(){
        var children = uiUtil.adapter.findElementsWithClassName(this.domElement,"toolbarButtonIconCell")
        var i;
        for (i = 0; i < children.length; i++) {
            var button = children[i];
            var action=this.grid.toolbarActions[i];
            this.enableDisableButton(button, this.grid.isToolbarActionValid(action, button, this));
            var iconUrl=action.iconUrl;
            if(!button.enabled && action.disabledIconUrl){
                iconUrl=action.disabledIconUrl;
            }
            button.style.background="background: transparent url(" + iconUrl + ") no-repeat left center";
        }

        var pageInfo=uiUtil.adapter.findElementWithClassName(this.domElement,'pageInfo');
        if(pageInfo)
            pageInfo.innerHTML=flxConstants.PGR_ITEMS+" "+this.getPageStart()+" "+flxConstants.PGR_TO+" "+this.getPageEnd()+" "+flxConstants.PGR_OF+" "+this.getTotalRecords()
                +". "+flxConstants.PGR_PAGE+" "+(this.getPageIndex()+1)+" "+flxConstants.PGR_OF+" "+this.getPageCount() ;
        var firstPage = uiUtil.adapter.findElementWithClassName(this.domElement,'firstPage');
        if(firstPage)
            this.enableDisableButton(firstPage, this.getPageIndex()>0);
        var prevPage = uiUtil.adapter.findElementWithClassName(this.domElement,'prevPage');
        if(prevPage)
            this.enableDisableButton(prevPage, this.getPageIndex()>0);
        var nextPage = uiUtil.adapter.findElementWithClassName(this.domElement,'nextPage');
        if(nextPage)
            this.enableDisableButton(nextPage, this.getPageIndex() < (this.getPageCount()-1));
        var lastPage = uiUtil.adapter.findElementWithClassName(this.domElement,'lastPage');
        if(lastPage)
            this.enableDisableButton(lastPage, this.getPageIndex() < (this.getPageCount()-1));
        var dp= this.getPageDropdown();
        var pi=this.getPageIndex();
        if(dp){
            var options=[];
            dp.options.length=0;
            for(i=1;i<=this.getPageCount();i++){
                var option=document.createElement("option");
                option.value = i;
                option.text = i;
                option.selected = ((pi+1==i)?'selected':'');
                dp.options.add(option);
            }
        }
    };


    PagerControl.ACTION_FIRST_PAGE="firstPage";
    PagerControl.ACTION_PREV_PAGE="prevPage";
    PagerControl.ACTION_NEXT_PAGE="nextPage";
    PagerControl.ACTION_LAST_PAGE="lastPage";
    PagerControl.ACTION_SORT="sort";
    PagerControl.ACTION_SETTINGS="settings";
    PagerControl.ACTION_OPEN_SETTINGS="openSettings";
    PagerControl.ACTION_SAVE_SETTINGS="saveSettings";
    PagerControl.ACTION_FILTER_SHOW_HIDE="filterShowHide";
    PagerControl.ACTION_RUN_FILTER="filter";
    PagerControl.ACTION_CLEAR_FILTER="clearFilter";
    PagerControl.ACTION_PRINT="print";
    PagerControl.ACTION_PDF="pdf";
    PagerControl.ACTION_WORD="word";
    PagerControl.ACTION_EXCEL="excel";
    PagerControl.ACTION_EXPAND_DOWN="expandDown";
    PagerControl.ACTION_EXPAND_UP="expandUp";
    PagerControl.ACTION_EXPAND_ALL="expandAll";
    PagerControl.ACTION_COLLAPSE_ALL="collapseAll";
    PagerControl.ACTION_CUSTOM_PRINT = "customPrint";


    var imageButtonMouseOver=function(event){
        var target = event.currentTarget || event.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        if(target.className.indexOf("over")==-1)target.className="over";
    }
    var imageButtonMouseOut=function(event){
        var target = event.currentTarget || event.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        if(target.className.indexOf("over")!=-1)target.className=target.className.replace("over","");
    }
    var imageButtonClick=function(event){
        var target = event.currentTarget || event.srcElement;
        if(target.parentNode.className.indexOf("disabled")>=0)return;
        target.pagerControl.processAction(target.code, event);
    }
    var onPageDropdownChange=function(event){
        var target = event.currentTarget || event.srcElement;
        var pageIndex = target.value;
        var pagerControl= target.pagerControl;
        pagerControl.setPageIndex(parseInt(target.value)-1);
        pagerControl.refresh();

    }

    PagerControl.prototype.destroyButtons=function(arr){

        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            var img=uiUtil.adapter.findElementWithClassName(this.domElement,"imageButton"+uiUtil.doCap(obj));
            if(img){
                img.code=obj;
                uiUtil.removeDomEventListener(img,"mouseover",imageButtonMouseOver)
                uiUtil.removeDomEventListener(img,"mouseout",imageButtonMouseOut)
                uiUtil.removeDomEventListener(img,"click",imageButtonClick);
                img.pagerControl=null;
                img.src="";
            }
        }
    }
    PagerControl.prototype.initializeButtons=function(arr){
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            var img=uiUtil.adapter.findElementWithClassName(this.domElement,"imageButton"+uiUtil.doCap(obj));
            if(img){
                img.code=obj;
                uiUtil.addDomEventListener(this,img,"mouseover",imageButtonMouseOver)
                uiUtil.addDomEventListener(this,img,"mouseout",imageButtonMouseOut)
                uiUtil.addDomEventListener(this,img,"click",imageButtonClick)
                img.pagerControl=this;
            }
        }
    }

    PagerControl.prototype.processAction=function(code, event){
        if(code==PagerControl.ACTION_FIRST_PAGE){
            this.onImgFirstClick();
        }else if(code==PagerControl.ACTION_PREV_PAGE){
            this.onImgPreviousClick();
        }else if(code==PagerControl.ACTION_NEXT_PAGE){
            this.onImgNextClick();
        }else if(code==PagerControl.ACTION_LAST_PAGE){
            this.onImgLastClick();
        }else if(code==PagerControl.ACTION_SETTINGS){
            this.onShowSettingsPopup();
        }else if(code==PagerControl.ACTION_OPEN_SETTINGS){
            this.onOpenSettingsPopup();
        }else if(code==PagerControl.ACTION_SAVE_SETTINGS){
            this.onSaveSettingsPopup();
        }else if(code==PagerControl.ACTION_CLEAR_FILTER){
            this.onClearFilter();
        }else if(code==PagerControl.ACTION_EXCEL){
            this.onExcelExport();
        }else if(code==PagerControl.ACTION_FILTER_SHOW_HIDE){
            this.onShowHideFilter();
        }else if(code==PagerControl.ACTION_PDF){
            this.onPdf();
        }else if(code==PagerControl.ACTION_PRINT){
            this.onPrint();
        }else if(code==PagerControl.ACTION_RUN_FILTER){
            this.onProcessFilter();
        }else if(code==PagerControl.ACTION_SORT){
            this.grid.multiColumnSortShowPopup();
        }else if(code==PagerControl.ACTION_WORD){
            this.onWordExport();
        }else if(code==PagerControl.ACTION_EXPAND_ALL){
            this.grid.expandAll();
        }else if(code==PagerControl.ACTION_EXPAND_UP){
            this.grid.expandUp();
        }else if(code==PagerControl.ACTION_EXPAND_DOWN){
            this.grid.expandDown();
        }else if(code==PagerControl.ACTION_COLLAPSE_ALL){
            this.grid.collapseAll();
        } else if(code == PagerControl.ACTION_CUSTOM_PRINT){
            this.onCustomPrint(event)
        }

        this.refresh();
    };

    PagerControl.prototype.getDataCell = function(pagerCell, direction){
        var cell = pagerCell;
        while(cell && cell.className.indexOf("flexDataGridDataCell") == -1)
            cell = cell[direction+"ElementSibling"];
        return cell;
    };

    PagerControl.prototype.onCustomPrint = function(event){
        var pagerCell = event.currentTarget;
        while(pagerCell.className.indexOf("flexDataGridCell") == -1)
            pagerCell = pagerCell.offsetParent;
        var displayOrder = pagerCell.component.level.displayOrder;
        var cell = this.getDataCell(pagerCell, displayOrder.indexOf("pager") < displayOrder.indexOf("body") ? "next" : "previous" );
        if(cell)
            flexiciousNmsp.LevelPrintController.getInstance().print(
                cell.component.level,
                cell.component.level.getParentLevel().getChildren(
                    cell.component.level.grid.getParent(
                        cell.component.rowInfo.rowPositionInfo.rowData, cell.component.level
                    ),
                    true,
                    false,
                    true
                )
            );
        else
            console.log("i (grid) think, in this level print not possible..");
    };

    PagerControl.prototype.kill=function(){
        if(this.dead)return;
        this.destroy();
        this.level=null;
        this.rowInfo=null;
        this.grid=null;
        flexiciousNmsp.UIComponent.prototype.kill.apply(this);

    };
    flexiciousNmsp.ClaimStatusPagerControl = PagerControl;
}(window));