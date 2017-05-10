import publications from './main-publications.html!text'

let controller = function ($state, sessionStorage, PublicationsFac, reactFac) {
  let self = this

  self.name = sessionStorage.get('name')
  self.publication = ''
  self.publications = PublicationsFac.query({user: self.name})

  self.doesHowMuch = date => {
    let now = new Date()
    date = new Date(date)
    return ((now.getTime() - date.getTime()) / 60 / 1000).toFixed(0)
  }

  self.react = (id, type) => {
    reactFac.update({id: id}, {react: type, user: self.name})
    reactFac.get({id: id}).$promise.then(data => {
      console.log(data.reactions)
    })
  }

  self.publicate = () => {
    if (self.publication.length > 0) {
      PublicationsFac.save({
        publication: self.publication,
        user: self.name
      }).$promise
      .then(() => {
        self.publications = PublicationsFac.query()
        self.publication = ''
      })
    } else {
      console.log(`Debe escribir algo antes de publicar`)
    }
  }
}

export default {
  controller: [
    '$state',
    'sessionStorage',
    'PublicationsFac',
    'reactFac',
    controller
  ],
  template: publications
}
