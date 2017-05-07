let routeLogin = ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/authentication')
  $stateProvider
    .state('authentication', {
      url: '/authentication',
      template: '<primary-authentication class="height-full"></primary-authentication>'
    })
}

export default ['$urlRouterProvider', '$stateProvider', routeLogin]
