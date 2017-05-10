let directive = () => {
  return {
    // restrict: 'A',
    link: function (scope, element, attributes) {
      element[0].addEventListener('click', (event) => {
        event.target.parentNode.classList.remove('select-reactions')
      })
    }
  }
}

export default [
  directive
]
