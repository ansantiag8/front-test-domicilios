let directive = () => {
  return {
    // restrict: 'A',
    link: function (scope, element, attributes) {
      element[0].addEventListener('click', (event) => {
        let oldPublications = event.target.parentNode.parentNode.parentNode.parentNode
        let reactions = event.target.parentNode.parentNode.parentNode.querySelector('.reactions')

        oldPublications.querySelectorAll('.select-reactions').forEach((items) => {
          items.classList.remove('select-reactions')
        })

        reactions.classList.add('select-reactions')
      })
    }
  }
}

export default [
  directive
]
