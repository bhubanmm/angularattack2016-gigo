(function(app) {
  app.EventDateDetailsComponent =
    ng.core.Component({
      selector: 'event-details',
      templateUrl: 'app/app.eventdetails.html',
      inputs: ['eventInstance']
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));