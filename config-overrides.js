const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')
const { filter, includes } = require('lodash')
const slug = require('remark-slug')

module.exports = function override(config, env) {
  // ALIASES
  config = rewireAliases.aliasesOptions({
    '@core': path.resolve(__dirname, `${paths.appSrc}/core`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components`),
    '@views': path.resolve(__dirname, `${paths.appSrc}/views`),
  })(config, env)

  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf = [
        {
          test: /\.mdx?$/,
          use: [
            'babel-loader',
            {
              loader: '@mdx-js/loader',
              options: {
                remarkPlugins: [slug],
              },
            },
          ],
        },
        ...rule.oneOf,
      ]
    }

    return rule
  })

  return config
}
