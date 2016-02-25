/**
 * Created by 19.06.2013-7pm on 25-Feb-16.
 */

(function(w){

    var LevelPrintController = function(){
        var dummyContainer = new flexiciousNmsp.UIComponent("div");
        dummyContainer.domElement.style.position = "absolute";
        dummyContainer.domElement.style.top = "-1000px";
        dummyContainer.domElement.style.zIndex = "-1000";
        //dummyContainer.domElement.style.position = "absolute";

        this.dummyContainer = dummyContainer;
        this.currentGrid = null;
    };

    flexiciousNmsp.LevelPrintController = LevelPrintController;
    LevelPrintController.prototype = new flexiciousNmsp.TypedObject();
    LevelPrintController.prototype.typeName = LevelPrintController.typeName = "LevelPrintController";
    LevelPrintController.prototype.getClassNames = function(){
        return ["LevelPrintController", "TypedObject"];
    };

    LevelPrintController._instance = new LevelPrintController();
    LevelPrintController.getInstance = function(){
        return flexiciousNmsp.LevelPrintController._instance;
    };

    LevelPrintController.prototype.print = function(level, dataProvider){
        var bodyChild = Array.prototype.slice.call( document.body.children )
        if(bodyChild.indexOf(this.dummyContainer.domElement) != -1){
            this.dummyContainer.removeAllChildren();
        } else {
            document.body.appendChild(this.dummyContainer.domElement);
        }

        var flexDataGrid = this.currentGrid = this.createFlexDataGrid(level, dataProvider);
        setTimeout(function(){
            flexDataGrid.refreshCells();
            flexDataGrid.toolbarPrintHandlerFunction();
        },1);

        flexDataGrid.addEventListener(this, flexiciousNmsp.PrintPreviewEvent.AFTER_PRINT, this.onPrintComplete);
        flexDataGrid.addEventListener(this, flexiciousNmsp.PrintPreviewEvent.PRINT_CANCELED, this.onPrintComplete);
    };

    LevelPrintController.prototype.onPrintComplete = function(event){
        this.currentGrid.removeEventListener(flexiciousNmsp.PrintPreviewEvent.AFTER_PRINT, this.onPrintComplete);
        this.currentGrid.removeEventListener(flexiciousNmsp.PrintPreviewEvent.PRINT_CANCELED, this.onPrintComplete);
        this.currentGrid.kill();
        this.currentGrid = null;
        //document.body.removeChild(this.dummyContainer.domElement);
    };

    LevelPrintController.prototype.createFlexDataGrid = function(level, dataProvider){
        var flexDataGrid = new flexiciousNmsp.FlexDataGrid(this.dummyContainer.domElement);
        var cols = [], originalColumns = level.getColumns();
        for(var i = 0; i < originalColumns.length; i++)
            cols.push(level.cloneColumn(originalColumns[i]));
        flexDataGrid.setColumns(cols);
        flexDataGrid.setDataProvider(dataProvider);
        flexDataGrid.setEnableFooters(level.getEnableFooters());
        flexDataGrid.validateNow();
        return flexDataGrid;
    }


}(window));


