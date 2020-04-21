smartPAR.controller('DropdownCtrl', ['$rootScope', '$scope', '$cookieStore', function ($rootScope, $scope, $cookieStore) {

  $scope.logout = function (){
      $rootScope.currentUser = undefined;
      $cookieStore.remove('user')
  }
    
}]);