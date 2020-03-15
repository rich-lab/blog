/* global PUBLIC_PATH, ROUTE_BASE */

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]'
    }

    if (PUBLIC_PATH) {
      window.publicPath = PUBLIC_PATH;
    }

    if (ROUTE_BASE) {
      if (typeof ROUTE_BASE === 'string') {
        window.routerBase = ROUTE_BASE
      }
      
      if (isPlainObject(ROUTE_BASE)) {
        for (let host of Object.keys(ROUTE_BASE)) {
          const currentHost = location.host || location.hostname
          if (currentHost.includes(host)) {
            window.routerBase = ROUTE_BASE[host]
            break
          }
        }
      }
    }
  }

  console.warn(`[dynamic-base] publicPath = ${window.publicPath}`)
  console.warn(`[dynamic-base] routerBase = ${window.routerBase}`)

  /**
   * Dynamic routerBase.
   */
  if (window.routerBase) {
    window.__VUEPRESS_ROUTER_BASE__ = window.routerBase;
  }

  /**
   * Dynamic publicPath.
   */
  if (window.publicPath) {
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
}
