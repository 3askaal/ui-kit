const path = require('path')
const slug = require('remark-slug')
const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
  setWebpackOptimizationSplitChunks,
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
    setWebpackOptimizationSplitChunks({
      chunks: 'all',
      name: true,
    }),
    addWebpackAlias({
      ['@core$']: path.resolve(__dirname, 'src/core'),
      ['@components$']: path.resolve(__dirname, 'src/components'),
      ['@views$']: path.resolve(__dirname, 'src/views'),
      ['@tests$']: path.resolve(__dirname, 'src/tests'),
    }),
  ),
  jest: (config) => {
    config.transformIgnorePatterns = [
      'node_modules/?!(react-syntax-highlighter)/',
    ]
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      '^@core(.*)$': '<rootDir>/src/core$1',
      '^@components(.*)$': '<rootDir>/src/components$1',
      '^@views(.*)$': '<rootDir>/src/views$1',
      '^@tests(.*)$': '<rootDir>/src/tests$1',
    }
    return config
  },
}
