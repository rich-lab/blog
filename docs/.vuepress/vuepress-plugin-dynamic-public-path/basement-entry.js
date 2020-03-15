/*!
 * vuepress-plugin-basement
 * (c) 2016-2019 真山
 */

if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  window.publicPath = 'https://richlab.oss-cn-hangzhou.aliyuncs.com/';
  window.routerBase = location.pathname;
}

/**
 * Dynamic routerBase.
 * ref: https://docs.antfin.com/basement/fe/fe_site#%E5%8A%A8%E6%80%81-routerbase
 */
if (typeof window !== 'undefined' && window.routerBase) {
  window.__VUEPRESS_ROUTER_BASE__ = window.routerBase;
}

/**
 * Dynamic publicPath.
 * ref: https://docs.antfin.com/basement/fe/fe_site#%E5%8A%A8%E6%80%81-publicpath
 */
if (typeof window !== 'undefined' && window.publicPath) {
  __webpack_public_path__ = window.publicPath;

  // ref: https://github.com/webpack/webpack/issues/5021
  const originalChunkLoad = __webpack_chunk_load__;
  __webpack_chunk_load__ = function (id) {
    return (function tryCdn() {
      return originalChunkLoad(id).catch(e => {
        __webpack_public_path__ = window.publicPath;
        return tryCdn();
      })
    }());
  }
}
