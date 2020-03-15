/*!
 * vuepress-plugin-basement
 * (c) 2016-2019 真山
 */

/**
 * Modify $withBase method.
 */
export default ({ Vue }) => {
  const withBase = Vue.prototype.$withBase;
  Vue.prototype.$withBase = function (url) {
    if (url && url.startsWith('/') && typeof window !== 'undefined' && window.publicPath) {
      const link = url.split(/#|\?/)[0];
      const ext = link.substring(link.lastIndexOf('.'));
      if (ext && ext !== '.html') {
        // static resource
        return `${window.publicPath}${url.slice(1)}`;
      }
    }

    return withBase.call(this, url);
  };
};
