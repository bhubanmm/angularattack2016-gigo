(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    ng.platformBrowserDynamic.bootstrap(app.EventDetailComponent);
    ng.platformBrowserDynamic.bootstrap(app.TestComponent);
  });
})(window.app || (window.app = {}));
