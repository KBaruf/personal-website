// Development-only dev-server middleware.
//
// Create React App loads this file via `onBeforeSetupMiddleware` and passes it
// the underlying Express app. It is NEVER included in a production build, so
// nothing here affects the deployed site.
//
// Why this exists:
// CRA's dev server sends `Access-Control-*` headers but no `Cache-Control`, and
// the dev bundle is served under a fixed, unhashed filename (`static/js/bundle.js`).
// With no explicit caching directive and no `Last-Modified`, browsers fall back to
// heuristic caching and may reuse a previously fetched bundle without revalidating.
//
// That is harmless most of the time, but if a bundle is fetched while the build is
// briefly broken -- for example while `node_modules` is being reinstalled -- the
// browser can pin that broken copy and keep replaying its errors long after the
// build is healthy again. Sending `no-store` guarantees every reload fetches the
// current bundle.
module.exports = function setupDevServer(app) {
  app.use(function noStoreDevAssets(req, res, next) {
    res.setHeader('Cache-Control', 'no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
  });
};
