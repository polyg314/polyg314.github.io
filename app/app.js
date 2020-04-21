
var smartPAR = angular.module('smartPAR', ['ui.router', 'ui.bootstrap', 'n3-pie-chart', 'ngCookies', 'datatables', 'datatables.bootstrap'])
.run(function($rootScope, $state, $cookieStore, $http, fixtures, zones, programs, alerts) {

  $rootScope.currentUser = $cookieStore.get('user');


  if($rootScope.currentUser === undefined){
    $state.go('login')
  }else{
      var data = {};
      data['id'] = 1;
      var req = {
         method: 'GET',
         url: '/api/server/',
         headers: {
          Accept: 'application/json',
          "requestorid" : $rootScope.currentUser.requestorid
         },
         data: data,
      }                     
      $http(req).success(function(res){   
        $rootScope.server = res.servers[0];
        fixtures.getFixtures();
        zones.getZones();
        alerts.getAlerts();
        programs.getPrograms();
      }).error(function(res){
        $cookieStore.remove('user');
        $state.go('login');
      }) 
  }



  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;
    if (requireLogin && $rootScope.currentUser === undefined) {
      event.preventDefault();
    }
  });



  // $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
  //   if (requireLogin && $rootScope.currentUser === undefined) {
  //     event.preventDefault();
  //   }
  // });


  $rootScope.getFixturesCount = function (zoneid){
      return $rootScope.zoneFixtures[zoneid]["fixtures"].length;
  };

  $rootScope.active = function(input){
    if(input === 1){
      return true;
    }else{
      return false;
    }
  };

  $rootScope.fixtureManual = function(fixtureid){
    console.log(fixtureid)
  };
    
  $rootScope.alertStatus = function(value){
    if(String(value) === 'true'){
      return 'acknowledged'
    }else{
      return 'new'
    }
  }

  $rootScope.notCurrent = function(programid, skedid){
    if(programid === skedid){
      // console.log(programid)
      // console.log(skedid)
      // console.log("HIIIII")
      return "false"
    }else{
      //    console.log(programid)
      // console.log(skedid)
      return "true"
    }
  };

  $rootScope.newZoneProgram = function(selectedProgram){
    var counter = 0;
    for(i = 0; i < $rootScope.programs.length; i++){
      if($rootScope.programs[i]['name'] === selectedProgram){
        $rootScope.zoneProgram = $rootScope.programs[i]
        counter++;
      }
    }
    if(counter === 0){
      $rootScope.zoneProgram = $rootScope.programsObject[$rootScope.zonesObject[$rootScope.zoneId]['skedid']]
    }
    console.log($rootScope.zoneProgram)
  }

  $rootScope.getZones = function(programid){
    var string = '';
    for(var keys in $rootScope.zonesObject){
      if($rootScope.zonesObject[keys]['skedid'] === programid){
        if(string.length > 0){
          string += ', ' + $rootScope.zonesObject[keys]['name']
        }else{
          string = $rootScope.zonesObject[keys]['name']
        }
      }
    }
    if(string.length === 0){
      return 'no zones running program'
    }else{
      return string;
    }
  };

  // console.log($state)
});



