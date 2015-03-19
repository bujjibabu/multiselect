myApp.controller( 'demoMinimum' , [ '$scope', function ($scope) {               

    $scope.modernBrowsers = [
        { 
            id:1,
            icon: '<img src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',                         
            name: 'Opera',              
            maker: 'Opera Software',        
            ticked: true    
        },
        { 
            id:2,
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',             
            name: 'Internet Explorer',  
            maker: 'Microsoft',
            ticked: false   
        },
        { 
            id:3,
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',         
            name: 'Firefox',            
            maker: 'Mozilla Foundation',    
            ticked: true    
        },
        { 
            id:4,
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',             
            name: 'Safari',             
            maker: 'Apple',                 
            ticked: false   
        },
        { 
            id:5,
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',  
            name: 'Chrome',             
            maker: 'Google',                
            ticked: true    
        }    
    ];
    $scope.tempData=angular.copy($scope.modernBrowsers);
    $scope.safeApply = function(scopeObject) {
        try{
            logService.log('Before applying $apply');
            if(!scopeObject.$$phase) {
                logService.log('$apply not in progress');
                scopeObject.$apply();
                logService.log('$apply applied');
            }else{
                logService.log('$apply already in progress');
            }
        }catch(e){}
    };

    $scope.fnAdd = function(){
        $scope.myoutputBrowsers = angular.copy($scope.outputBrowsers);
        console.log("OutPut Browsers", $scope.myoutputBrowsers);
        for (var i = 0; i < $scope.modernBrowsers.length; i++) {
            $scope.modernBrowsers[i].ticked=false;
        };
        $scope.safeApply();
        console.log("All Browsers", $scope.modernBrowsers);
    }

    $scope.fnEdit = function(){
        angular.forEach($scope.modernBrowsers, function(value,key) {
            for (var i = 0; i < $scope.myoutputBrowsers.length; i++) {
                if(value.id==$scope.myoutputBrowsers[i].id){
                $scope.modernBrowsers[key].ticked=true;
                }
            };
        });
        console.log("All Browsers edit", $scope.modernBrowsers);
        $scope.safeApply();
    }
}]);
