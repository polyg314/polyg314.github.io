smartPAR.factory('programs', ['$http', '$rootScope', function($http, $rootScope) {

    var programsObject = {};

    programsObject[0] = { name: 'no program'};

    var service = {};

    service.getPrograms = function(){

      var programsObject = {};
        var req = {
             method: 'GET',
             url: '/api/programs/',
             headers: {
              Accept: 'application/json', 
              "requestorid" : $rootScope.currentUser.requestorid
             },
          }                     
          $http(req).success(function(res){
            $rootScope.programs = res.programs;
          	for(i = 0; i < res.programs.length; i++){
          		programsObject[res.programs[i].id] = res.programs[i]
          	}
          	$rootScope.programsObject = programsObject;
          	console.log($rootScope.programs)
          	return programsObject;       
          }).error(function(res){
          	return 'error'
          })
    }


  return service;

}]);