smartPAR.config(function($stateProvider, $urlRouterProvider){
            
      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "app/templates/main.html",
            abstract: true,
            data: {
              requireLogin: true // this property will apply to all children of 'main'
            }
        })
        .state('main.dashboard', {
              url: "/dashboard",
              templateUrl: "app/templates/dashboard.html",
        })
        .state('main.fixtures', {
              url: "/fixtures",
              templateUrl: "app/templates/fixtures/fixtures.html",
        })
        .state('main.programs', {
              url: "/programs",
              templateUrl: "app/templates/programs/programs.html",
        })
        .state('main.zones', {
              url: "/zones",
              templateUrl: "app/templates/zones/zones.html",
        })
        .state('main.zonedetails', {
              url: "/zones/:zoneId",
              templateUrl: "app/templates/zones/zonedetails.html",
        })
        .state('main.alerts', {
              url: "/alerts",
              templateUrl: "app/templates/alerts.html",
        })
        .state('main.controller', {
              url: "/controller",
              templateUrl: "app/templates/settings/controller.html",
        })
        .state('main.network', {
              url: "/network",
              templateUrl: "app/templates/settings/network.html",
        })
        .state('main.server', {
              url: "/server",
              templateUrl: "app/templates/settings/server.html",
        })
        .state('main.users', {
              url: "/users",
              templateUrl: "app/templates/users.html",
        })
        .state('main.profile', {
              url: "/profile",
              templateUrl: "app/templates/profile.html",
        })
        .state('login', {
              url: "/login",
              templateUrl: "app/templates/login.html",
              data: {
                requireLogin: false
              }, 
              controller: 'LoginCtrl'
        });

        $urlRouterProvider.otherwise("/login");

    });