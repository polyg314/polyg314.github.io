smartPAR.controller('TabsCtrl', ['$rootScope','$state', function ($rootScope, $state) {
    
    $rootScope.isActiveTab = function(tabUrl) {
        return tabUrl == $state.current.url;
    }

    $rootScope.alertsCount = function(){
      if($rootScope.alerts){
        var count = 0;
        for( i = 0; i < $rootScope.alerts.length; i++ ){
          if($rootScope.alerts[i].acked === false){
            count++;
          }
        }
        return count;  
      }
    }
}]);
