import publications from './main-publications.html!text'

let controller = function ($state, sessionStorage, PublicationsFac) {
  let self = this

  self.name = sessionStorage.get('name')
  self.publication = ''
  self.publications = PublicationsFac.query()

  self.doesHowMuch = date => {
    let now = new Date()
    date = new Date(date)
    return ((now.getTime() - date.getTime()) / 60 / 1000).toFixed(0)
  }

  self.publicate = () => {
    PublicationsFac.save({
      publication: self.publication,
      user: self.name
    })
  }
}

export default {
  controller: [
    '$state',
    'sessionStorage',
    'PublicationsFac',
    controller
  ],
  template: publications
}
