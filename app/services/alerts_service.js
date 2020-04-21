smartPAR.factory('alerts', ['$http', '$rootScope', function($http, $rootScope) {

    var alertsObject = {};

    var service = {};

    service.getAlerts = function(){

      var alertsObject = {};
        var req = {
             method: 'GET',
             url: '/api/alerts/',
             headers: {
              Accept: 'application/json', 
              "requestorid" : $rootScope.currentUser.requestorid
             },
          }                     
          $http(req).success(function(res){
            $rootScope.alerts = res.alerts;
          	for(i = 0; i < res.alerts.length; i++){
          		alertsObject[res.alerts[i].id] = res.alerts[i]
          	}
          	$rootScope.alertsObject = alertsObject;
          	console.log($rootScope.alerts);
          	return alertsObject;       
          }).error(function(res){
          	return 'error'
          })
    }


  return service;

}]);