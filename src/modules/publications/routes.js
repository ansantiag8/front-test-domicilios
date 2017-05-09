let routeLogin = ($urlRouterProvider, $stateProvider) => {
  $stateProvider
    .state('publications', {
      url: '/publications',
      template: '<main-publications class="height-full"></main-publications>'
    })
}

export default ['$urlRouterProvider', '$stateProvider', routeLogin]
