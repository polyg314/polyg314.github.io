smartPAR.controller('DashboardCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

  $scope.zoneStatusColor = function(zoneid){

    var red = false;
    var yellow = false;
    if($rootScope.zoneFixtures[zoneid]["fixtures"].length > 0){
      for(i = 0; i < $rootScope.zoneFixtures[zoneid]["fixtures"]; i++){
        var rstate = $rootScope.zoneFixtures[zoneid]["fixtures"][i]["rstate"];
        if(rstate === 1 || rstate === 2 || rstate === 3 || rstate === 5){
          yellow = true;
        }else if(rstate === 4 || rstate === 6){
          red = true;
        }
      };
      if(red){
        return "background-color: #d84a38";
        // zones[item]["textStatus"] = "One or more fixtures faulting"
      }else if(yellow){
        return "background-color: #ffb848";
        // zones[item]["textStatus"] = "One or more fixtures not on program"
      }else{
        return "background-color: #35aa47";
        // zones[item]["textStatus"] = "OK"
      }
    }else{
      return "background-color: #ffb848";
      // zones[item]["textStatus"] = "No Fixtures"
    }

  }

  $scope.zoneTooltipText = function(zoneid){

    var red = false;
    var yellow = false;
    if($rootScope.zoneFixtures[zoneid]["fixtures"].length > 0){
      for(i = 0; i < $rootScope.zoneFixtures[zoneid]["fixtures"]; i++){
        var rstate = $rootScope.zoneFixtures[zoneid]["fixtures"][i]["rstate"];
        if(rstate === 1 || rstate === 2 || rstate === 3 || rstate === 5){
          yellow = true;
        }else if(rstate === 4 || rstate === 6){
          red = true;
        }
      };
      if(red){
        return "One or more fixtures faulting"
      }else if(yellow){
        return "One or more fixtures not on program"
      }else{
        return "OK"
      }
    }else{
      return "No Fixtures"
    }

  }


  $scope.hoverOn = function(zoneid){

      var hue, saturation, lightness, hoverColor;
          if(($rootScope.zonesObject[zoneid].blue + $rootScope.zonesObject[zoneid].red) > 0 ){
            hue = 300 - (($rootScope.zonesObject[zoneid].blue/ ($rootScope.zonesObject[zoneid].blue + $rootScope.zonesObject[zoneid].red)) * 60) + (($rootScope.zonesObject[zoneid].red/ ($rootScope.zonesObject[zoneid].blue + $rootScope.zonesObject[zoneid].red)) * 60);
            saturation = 90;
            lightness = 40 + Math.floor($rootScope.zonesObject[zoneid].white/2.5);
          }else{
            hue = 0;
            saturation = 0;
            lightness = (40 + Math.floor($rootScope.zonesObject[zoneid].white/2));
          }
      hoverColor = "hsla(" + hue + "," + saturation + "%," + lightness + "%, 0.8)";
      $rootScope.zonesObject[zoneid]['hoverStyle'] = '-webkit-box-shadow: 0px 2px 16px 4px ' + hoverColor + '; -moz-box-shadow: 0px 2px 16px 4px ' + hoverColor + '; box-shadow: 0px 2px 16px 4px '+ hoverColor + ';'

  };

  $scope.hoverOff = function(zoneid){
    $rootScope.zonesObject[zoneid]['hoverStyle'] = '-webkit-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);'
  };


  $scope.getHoverStyle = function(zoneid){
    return $rootScope.zonesObject[zoneid['hoverStyle']]
  };


}]);