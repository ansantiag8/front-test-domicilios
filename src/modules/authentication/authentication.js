import angular from 'angular'

import routes from './routes'
import primaryAuthentication from './components/primary-authentication/primary-authentication'
// import AuthenticationFactory from './authentication-factory'
// import AuthenticationService from './authentication-service'
// import ApiInterceptorService from './interceptor'

export default angular.module('authentication', [])
.config(routes)
.component('primaryAuthentication', primaryAuthentication)
// .factory('AuthenticationFactory', AuthenticationFactory)
// .service('AuthenticationService', AuthenticationService)
// .service('ApiInterceptorService', ApiInterceptorService)
