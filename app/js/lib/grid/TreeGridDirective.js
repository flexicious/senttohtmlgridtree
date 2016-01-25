angular.module('fdGrid', ['fdConfBuilder']);



angular.module('fdGrid').factory('gridService', function () {
    var service = function (id) {
        if(document.getElementById(id))
            return document.getElementById(id).component;
    };
    return {
        grid: service
    };
});

angular.module('fdGrid').factory('localStorage', function () {
    var get = function (key) {
        return localStorage.getItem(key);
    };

    var set = function (key, val) {
        localStorage.setItem(key, val);
    };

    return{
        get: get,
        set: set
    }
});


angular.module('fdGrid').factory('sessionStorage', function () {
    var get = function (key) {
        return sessionStorage.getItem(key);
    };

    var set = function (key, val) {
        sessionStorage.setItem(key, val);
    };

    return{
        get: get,
        set: set
    }
}) ;

angular.module('fdGrid').directive('fdGrid',['fdBuilder', 'localStorage', function (fdBuilder, localStorage) {
    return {
        require: '?ngModel',
        replace: true,

        link: function (scope, elm, attr, ngModel) {

            var subConf = (fdBuilder.build($(elm[0]).children()));


            if (!ngModel) return;
            var g = '<grid ';
            for (var a in attr) {
                if (a.substring(0, 2) == 'xi') {
                    g += ' ' + a.substring(2, a.length) + '="' + attr[a] + '"';
                }
            }
            g += '>';
            g += subConf;
            g += '</grid>';

            var render = function(){
                if (!ngModel.$viewValue.configuration)
                    ngModel.$viewValue.configuration = g;

                if(elm[0].component && elm[0].component.domElement==elm[0]){
                    //this means we have this grid created before
                    if (ngModel.$viewValue.configuration) {
                        elm[0].component.buildFromXml(ngModel.$viewValue.configuration);
                    }
                    if (ngModel.$viewValue.dataProvider) {
                        elm[0].component.setDataProvider(ngModel.$viewValue.dataProvider);
                    }

                }else{
                    var grid = new flexiciousNmsp.FlexDataGrid(elm[0], ngModel.$viewValue);
                    render();
                }
            };

            ngModel.$render = function () {
                   render();

// SH = this is not needed for now.
//
//                if (grid.enablePreferencePersistence) {
//                    if (grid.persistPreferences) {
//                        var oldfunc=  grid.persistPreferences;
//                        grid.persistPreferences = function () {oldfunc(grid);};
//                    }
//                    if (grid.clearPreferences) {
//                        var oldfunc=  grid.clearPreferences;
//                        grid.clearPreferences = function () {oldfunc(grid);};
//                    }
//                    if (grid.loadPreferences) {
//                        var oldfunc=  grid.loadPreferences;
//                        grid.loadPreferences = function () { oldfunc(grid);};
//                    }
//
//                }
            };
        }
    };
}]);

