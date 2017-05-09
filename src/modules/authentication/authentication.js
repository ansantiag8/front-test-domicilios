import angular from 'angular'

import routes from './routes'
import sessionStorage from './session-storage'

// components
import primaryAuthentication from './components/primary-authentication/primary-authentication'
// import AuthenticationFactory from './authentication-factory'
// import ApiInterceptorService from './interceptor'

export default angular.module('authentication', [])
.config(routes)
.service('sessionStorage', sessionStorage)
.component('primaryAuthentication', primaryAuthentication)
// .factory('AuthenticationFactory', AuthenticationFactory)
// .service('ApiInterceptorService', ApiInterceptorService)
