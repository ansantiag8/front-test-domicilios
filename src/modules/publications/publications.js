import angular from 'angular'

import routes from './routes'
import publicationsFac from './factory'

// components
import mainPublications from './components/main-publications/main-publications'

export default angular.module('publications', [])
.config(routes)
.component('mainPublications', mainPublications)
.factory('PublicationsFac', publicationsFac)
