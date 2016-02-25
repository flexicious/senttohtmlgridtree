/**
 * Created by 19.06.2013-7pm on 22-Jan-16.
 */

(function(){

    App.controller("GridCtrl", ["$scope", function($scope){

        $scope.grid = null;

        if(!flexiciousNmsp.Array)
            flexiciousNmsp.Array = Array;

        var gridThemeStyle = {
            horizontalGridLines:true,
            horizontalGridLineColor : 0xEEEEEE,
            verticalGridLines:false,
            headerHorizontalGridLines:false,
            headerVerticalGridLines:false,
            footerHorizontalGridLines:false,
            footerVerticalGridLines:false,

            color:0x666666,
            borderColor:0xE0E1E1,
            selectionColor: 0xE7E7E7, //[0x2485AE,0x2C9DCD],
            activeCellColor: 0xFFF9F9,
            textRollOverColor:0x333333,
            textSelectedColor:0x555555,
            rollOverColor: 0xF8F8F8,
            alternatingItemColors:[0xFFFFFF,0xFFFFFF],

            headerColors: [0xE7E7E7,0xE7E7E7],
            headerRollOverColors:[0xE1E1E1, 0xE1E1E1],
            headerSortSeparatorColor:0x999999,
            headerStyleName : 'grid-default-header',

            disclosureOpenIcon:"/collapse1.png",
            disclosureClosedIcon:"/expand1.png",

            columnMoveResizeSeparatorColor:0x7A7A7A,
            columnGroupRollOverColors: [0xCECECE, 0x9F9F9F],

            footerColors:[0xE7E7E7,0xE7E7E7],
            footerRollOverColors: [0xE1E1E1, 0xE1E1E1]
        };


        $scope.init = function(){
        };

        $scope.LogoRenderer = new flexiciousNmsp.ClassFactory(flexiciousNmsp.LogoRenderer);
        $scope.LinkRenderer = new flexiciousNmsp.ClassFactory(flexiciousNmsp.LinkRenderer);
        $scope.ClaimPagerControl = new flexiciousNmsp.ClassFactory(flexiciousNmsp.ClaimPagerControl);
        $scope.ClaimStatusPagerControl = new flexiciousNmsp.ClassFactory(flexiciousNmsp.ClaimStatusPagerControl);

        var columnLevel = null;
        var claimLevel = null;
        var claimStatusLevel = null;

        $scope.indentColumnBackgroundFunction = function(cell, col){
            return 0xE7E7E7;
        };
		

        $scope.indentColumnBackgroundFunction2 = function(cell, col){
            return 0xA7E7E7;
        };

        $scope.gridOptions = {
            dataProvider : [],
            delegate: $scope,
            styles:gridThemeStyle
        };

        $scope.gridCreationComplete = function(event) {
            console.log("grid created");
            $scope.grid = event.target;
            var grid = $scope.grid;

            var f=new flexiciousNmsp.Filter();
            f.pageIndex=0;
            f.pageSize=grid.getPageSize();
            flexiciousNmsp.BusinessService.getInstance().getPagedOrganizationList(f,
                function(evt)
                {
                    grid.setPreservePager(true);
                    grid.setDataProvider(evt.result.collection);
                    grid.setTotalRecords(evt.result.totalRecords);
                }
            );

            grid.addEventListener(this, "edit", onGridEditRequest);
            grid.addEventListener(this, "delete", onGridDeleteRequest);

            columnLevel = grid.getColumnLevel();
            claimLevel = columnLevel.nextLevel;
            claimStatusLevel = claimLevel.nextLevel;
        };

        var onGridEditRequest = function(event){
            console.log("You can edit a from here. please look into event.item");
            alert("You can edit a from here. please look into event.item");
        };

        var onGridDeleteRequest = function(event){
            console.log("You can delete a from here. please look into event.item");
            alert("You can delete a from here. please look into event.item");
        };

        $scope.gridLevelOneItemLoadHandler = function(evt1){
            var org=evt1.filter.parentObject;
            org=org.clone();
            flexiciousNmsp.BusinessService.getInstance().getDealsForOrganization(org.id,evt1.filter,
                function(evt,token){
                    _footerData[org]=evt.result.summaryData;
                    $scope.grid.setChildData(evt1.filter.parentObject,evt.result.collection,evt1.filter.level.getParentLevel(),evt.result.totalRecords)
                }
            );

        };

        $scope.gridLevelOneFilterPageSortChangeHandler = function(event){
            flexiciousNmsp.BusinessService.getInstance().getPagedOrganizationList(event.filter,
                function(evt,token)
                {
                    var grid = $scope.grid;
                    grid.setPreservePager(true);
                    grid.setDataProvider(evt.result.collection);
                    grid.setTotalRecords(evt.result.totalRecords);
                }
            );
        };

        $scope.gridLevelTwoItemLoadHandler = function(evt1){
            var deal=evt1.filter.parentObject;
            flexiciousNmsp.BusinessService.getInstance().getInvoicesForDeal(deal.id,evt1.filter,
                function(evt,token){
                    _footerData[evt1.filter.parentObject]=evt.result.summaryData;
                    $scope.grid.setChildData(evt1.filter.parentObject,(evt.result.collection.slice()),
                        evt1.filter.level.getParentLevel() ,evt.result.totalRecords)

                }
            );
        };

        $scope.gridLevelTwoFilterPageSortChangeHandler = function(evt1){
            var org=evt1.filter.parentObject;
            flexiciousNmsp.BusinessService.getInstance().getDealsForOrganization(org.id,evt1.filter,
                function(evt,token){
                    $scope.grid.setChildData(evt1.filter.parentObject,evt.result.collection,evt1.filter.level.getParentLevel(),evt.result.totalRecords);
                }
            );
        };

        $scope.gridLevelThreeItemLoadHandler = function(evt1){
            var inv=evt1.filter.parentObject;
            flexiciousNmsp.BusinessService.getInstance().getLineItemsForInvoice(inv.id,evt1.filter,
                function(evt,token){
                    _footerData[evt1.filter.parentObject]=evt.result.summaryData;
                    $scope.grid.setChildData(evt1.filter.parentObject,(evt.result.collection.slice()),evt1.filter.level.getParentLevel(),evt.result.totalRecords)

                }
            );
        };

        $scope.gridLevelThreeFilterPageSortChangeHandler = function(evt1){
            var deal=evt1.filter.parentObject;
            flexiciousNmsp.BusinessService.getInstance().getInvoicesForDeal(deal.id,evt1.filter,
                function(evt,token){
                    $scope.grid.setChildData(evt1.filter.parentObject,new flexiciousNmsp.Array(evt.result.collection.slice()),
                        evt1.filter.level.getParentLevel(),evt.result.totalRecords);
                }
            );
        };

        $scope.gridLevelFourFilterPageSortChangeHandler = function(evt1){
            var inv=evt1.filter.parentObject;
            flexiciousNmsp.BusinessService.getInstance().getLineItemsForInvoice(inv.id,evt1.filter,
                function(evt,token){
                    $scope.grid.setChildData(evt1.filter.parentObject,new flexiciousNmsp.Array(evt.result.collection.slice()),evt.filter.getLevel().getParentLevel(),evt.result.totalRecords);
                }
            );
        };


        var _footerData ={};
        $scope.getFooterLabel=function (cell){

            if(_footerData[cell.getRowInfo().getData()]){
                if(cell.getColumn().dataField=="invoiceAmount" || cell.getColumn().dataField=="lineItemAmount" ||cell.getColumn().dataField=="dealAmount" )
                    return "Total: " + flexiciousNmsp.UIUtils.formatCurrency(_footerData[cell.getRowInfo().getData()].total);
                else
                    return "Count: " + _footerData[cell.getRowInfo().getData()].count;
            }
            return "";

        };

    }]);

}());