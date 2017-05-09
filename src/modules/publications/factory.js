let factory = function ($resource) {
  let url = 'http://localhost:3000/api/publications'

  return $resource(url, {id: '@id'}, {
    query: {
      method: 'GET',
      isArray: true
    }
  })
}

export default [
  '$resource',
  factory
]
