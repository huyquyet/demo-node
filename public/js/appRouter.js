angular.module('appRouter',[]).config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    /*Thiết lập các state*/
    $stateProvider.state('home', {
      url:"/",
      templateUrl:"view/home.html",
      controller:'baseController'
    })
    .state('list',{
      url:"list-post",
      templateUrl:"views/list.html",
      controller: 'ListPostController'
    })
    .state('create',{
      url:"create-post",
      templateUrl:"views/create.html",
      controller: 'CreatePostController'
    })
    state('404',{
      url:"/404.html",
      templateUrl:"views/404.html",
      title: '404 - Không tìm thấy trang yêu cầu'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('!');
  }
]);
