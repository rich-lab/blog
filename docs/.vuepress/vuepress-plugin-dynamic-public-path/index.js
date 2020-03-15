/*!
 * vuepress-plugin-basement
 * (c) 2016-2019 真山
 */

const { join } = require('path')

module.exports = (options = {}, ctx) => {
  return {
    enhanceAppFiles: [
      join(__dirname, 'enhanceApp.js')
    ],

    chainWebpack(config) {
      config
        .entry('app')
        .prepend(join(__dirname, 'basement-entry.js'))
        .end()

      // 生产固定静态资源的前缀
      const publicPath = ctx.isProd
        ? 'https://richlab.oss-cn-hangzhou.aliyuncs.com'
        : undefined;

      if (publicPath) {
        config.output.publicPath(publicPath);
      }
    }
  }
}
