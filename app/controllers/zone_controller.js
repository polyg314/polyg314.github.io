smartPAR.controller('ZoneCtrl', ['$rootScope','$stateParams', '$scope', '$timeout', '$state', function ($rootScope, $stateParams, $scope, $timeout, $state) {
    $rootScope.zoneId = $stateParams.zoneId;
    $scope.editable = false;


    // $scope.$watch('$viewContentLoaded', function(){
    // console.log($rootScope.programsObject)
    // console.log($scope.selectedProgram)
    

    //       $scope.selectedProgram = 'An example program';
    // })




    $scope.allowEdit = function(){
      $timeout(function(){
        $scope.$apply(function(){
          $scope.editable = true;
          console.log($scope.editable)
        })
      })

    }

    $scope.cancelEdit = function(program){
      $rootScope.zoneProgram = program;
      $state.reload();
    }

}]);
