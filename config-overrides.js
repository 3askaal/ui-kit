const path = require('path')
const slug = require('remark-slug')
const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.mdx$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [slug],
          },
        },
      ],
    }),
    addWebpackAlias({
      ['@core$']: path.resolve(__dirname, 'src/core'),
      ['@components$']: path.resolve(__dirname, 'src/components'),
      ['@views$']: path.resolve(__dirname, 'src/views'),
    }),
  ),
  jest: (config) => {
    config.transformIgnorePatterns = [
      'node_modules/?!(react-syntax-highlighter)/',
    ]
    return config
  },
}
