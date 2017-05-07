const appRoot = 'src/'
const outputRoot = 'build/'

module.exports = {
  html: appRoot + '**/*.html',
  indexDev: appRoot + 'index-development.html',
  js: appRoot + '**/*.js',
  output: outputRoot,
  sass: appRoot + 'sass/*.sass'
}
