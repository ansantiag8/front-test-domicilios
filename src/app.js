import angular from 'angular'
import 'angular-resource'

// modules
import authentication from './modules/authentication/authentication'
import publications from './modules/publications/publications'

import uiRouter from 'angular-ui-router' // aungular ui router debe ir de ultimo, en la unificacion se solapa la variable isDefined

angular.module('domicilios', [
  uiRouter,
  'ngResource',
  authentication.name,
  publications.name
])
