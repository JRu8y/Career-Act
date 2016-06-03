angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab5/page2
  */
  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.careerOccupationalSkillTree', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/careerOccupationalSkillTree.html',
        controller: 'careerOccupationalSkillTreeCtrl'
      }
    }
  })

  .state('tabsController.levelUp', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/levelUp.html',
        controller: 'levelUpCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.findYourNewPath', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/findYourNewPath.html',
        controller: 'findYourNewPathCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.occupationList', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/occupationList.html',
        controller: 'occupationListCtrl'
      }
    }
  })

  .state('tabsController.softwareEngineer', {
    url: '/page10',
    views: {
      'tab5': {
        templateUrl: 'templates/softwareEngineer.html',
        controller: 'softwareEngineerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')

  

});