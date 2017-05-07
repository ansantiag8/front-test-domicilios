import angular from 'angular'
// import angularResource from 'angular-resource'

// modules
import authentication from './modules/authentication/authentication'

import uiRouter from 'angular-ui-router' // aungular ui router debe ir de ultimo, en la unificacion se solapa la variable isDefined

angular.module('domicilios', [
  uiRouter,
  authentication.name
])
