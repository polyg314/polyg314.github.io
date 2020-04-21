smartPAR.factory('fixtures', ['$http', '$rootScope', function($http, $rootScope) {

    var fixturesObject = {};

    var service = {};

    service.getFixtures = function(){


      var zoneFixtures = {};

      var fixturesObject = {};
        var req = {
             method: 'GET',
             url: '/api/fixtures/',
             headers: {
              Accept: 'application/json', 
              "requestorid" : $rootScope.currentUser.requestorid
             },
          }                     
          $http(req).success(function(res){
            $rootScope.fixtures = res.fixtures;
            // console.log($rootScope.fixtures)
          	for(i = 0; i < res.fixtures.length; i++){

              if(zoneFixtures[res.fixtures[i].zoneid]){
                zoneFixtures[res.fixtures[i].zoneid]["fixtures"].push(res.fixtures[i])
              }else{
                zoneFixtures[res.fixtures[i].zoneid] = {};
                zoneFixtures[res.fixtures[i].zoneid]["fixtures"] = [res.fixtures[i]]
              }

          		fixturesObject[res.fixtures[i].id] = res.fixtures[i]
          	}
          	$rootScope.fixturesObject = fixturesObject;
            $rootScope.zoneFixtures = zoneFixtures;
            console.log($rootScope.zoneFixtures)
          	// console.log($rootScope.fixtures);
          	return fixturesObject;       
          }).error(function(res){
          	return 'error'
          })
    }


  return service;

}]);