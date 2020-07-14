const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@core': path.resolve(__dirname, `${paths.appSrc}/core`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components`),
    '@views': path.resolve(__dirname, `${paths.appSrc}/views`),
  })(config, env)
  return config
}
