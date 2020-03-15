/*!
 * vuepress-plugin-basement
 * (c) 2016-2019 真山
 */

const { join } = require('path')

module.exports = (options = {}, ctx) => {
  let { publicPath, routeBash } = options
  publicPath = ctx.isProd && typeof publicPath === 'string'
    ? publicPath
    : false

  return {
    define: {
      PUBLIC_PATH: publicPath,
      ROUTE_BASE: routeBash,
    },

    enhanceAppFiles: [
      join(__dirname, 'enhanceApp.js')
    ],

    chainWebpack(config) {
      config
        .entry('app')
        .prepend(join(__dirname, 'prepended-entry.js'))
        .end()

      /**
       * Only apply publicPath at production.
       */
      if (publicPath) {
        config.output.publicPath(publicPath);
      }
    }
  }
}
