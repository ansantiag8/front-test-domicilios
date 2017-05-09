let service = function ($window) {
  let self = this
  self.set = set
  self.get = get
  self.remove = remove
  self.destroy = destroy

  function set (key, value) {
    return $window.sessionStorage.setItem(key, value)
  }

  function get (key) {
    return $window.sessionStorage.getItem(key)
  }

  function remove (key) {
    return $window.sessionStorage.removeItem(key)
  }

  function destroy () {
    $window.sessionStorage.clear()
  }
}

export default [
  '$window',
  service
]
