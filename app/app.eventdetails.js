(function(app) {
  app.EventDateDetailsComponent =
    ng.core.Component({
      selector: 'event-details',
      templateUrl: 'app/app.eventDetails.html',
      inputs: ['eventInstance']
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));