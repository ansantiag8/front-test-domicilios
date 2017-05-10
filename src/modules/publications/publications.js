import angular from 'angular'

import routes from './routes'
import publicationsFac from './publication-factory'
import reactFac from './react-factory'

// components
import mainPublications from './components/main-publications/main-publications'

// directves
import react from './react-directive'
import reactions from './reactions-directive'

export default angular.module('publications', [])
.config(routes)
.component('mainPublications', mainPublications)
.directive('react', react)
.directive('reactions', reactions)
.factory('PublicationsFac', publicationsFac)
.factory('reactFac', reactFac)
