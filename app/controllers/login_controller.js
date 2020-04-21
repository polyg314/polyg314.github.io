smartPAR.controller('LoginCtrl', ['$scope', '$http', '$rootScope', '$state', '$cookieStore', 'fixtures', 'zones', 'programs', 'alerts', function ($scope, $http, $rootScope, $state, $cookieStore, fixtures, zones, programs, alerts) {

      $scope.submit = function() {
        // event.preventDefault();
        var datastring = "username=" + $scope.username + "&password=" + $scope.password;
        var req = {
             method: 'GET',
             url: '/api/authtoken/',
             headers: {
              Accept: 'application/json'
             },
          }                     
          $http(req).success(function(res){

            var authtoken = res["authtoken"];
                  jQuery.ajax({
                    type: "GET",
                    cache:false,
                    contentType: "application/json; charset=utf-8",
                    url: "/api/authuser/",
                    data: datastring,
                    dataType: 'json',
                    beforeSend:function(xhr){
                      xhr.setRequestHeader("authtoken", authtoken);
                      // jQuery('.alert-danger,.alert-success').hide();
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                      jQuery('.alert-danger').show();
                      switch(errorThrown){
                        case 'Not Found' :
                          jQuery('.alert-danger span').html(lang[20]);
                        break;
                        case 'Invalid Data' :           
                          jQuery('.alert-danger span').html(lang[21] + textStatus + ')');
                        break;
                        default :
                          jQuery('.alert-danger span').html(lang[22] + textStatus);
                        break;  
                      };
                    },
                    success: function(json){  
                      //jQuery.jStorage.deleteKey("authToken");         
                      // jQuery.jStorage.set("user", json.user);
                      //                               App.jog("user Object: ", json.user);
                      $rootScope.currentUser = json.user;
                      $cookieStore.put('user', $rootScope.currentUser);
                      fixtures.getFixtures();
                      zones.getZones();
                      alerts.getAlerts();
                      programs.getPrograms();
                      $state.go('main.dashboard');
                    }
                  });

          }).error(function(res){console.log(res)}) 
      };

}]);
