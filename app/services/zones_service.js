smartPAR.factory('zones', ['$http', '$rootScope', function($http, $rootScope) {

    var zonesObject = {};



    var service = {};

    service.getZones = function(){

      var zonesObject = {};
      zonesObject[0] = { name: 'no zone' };
        var req = {
             method: 'GET',
             url: '/api/zones/',
             headers: {
              Accept: 'application/json', 
              "requestorid" : $rootScope.currentUser.requestorid
             },
          }                     
          $http(req).success(function(res){
            $rootScope.zones = res.zones;
          	for(i = 0; i < res.zones.length; i++){
              $rootScope.zones[i].gauge_blue = [{label: "Blue", value: res.zones[i].blue, suffix: "%", color: "steelblue"}];
              $rootScope.zones[i].gauge_red = [{label: "Red", value: res.zones[i].red, suffix: "%", color: "red"}];
              $rootScope.zones[i].gauge_white = [{label: "White", value: res.zones[i].red, suffix: "%", color: "hsl(0,0%,50%)"}];
              $rootScope.zones[i].options = {thickness: 5, mode: "gauge", total: 100};
          		zonesObject[res.zones[i].id] = $rootScope.zones[i];
              zonesObject[res.zones[i].id]['hoverStyle'] = '-webkit-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);'
            }
            $rootScope.zonesObject = zonesObject;
            console.log(zonesObject);
          	console.log($rootScope.zones);
          	return zonesObject;       
          }).error(function(res){
          	return 'error'
          })
    }


  return service;

}]);