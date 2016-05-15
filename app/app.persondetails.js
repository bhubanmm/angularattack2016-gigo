(function(app) {
  app.PersonDetailComponent =
    ng.core.Component({
      selector: 'gigo-person-detail',
      templateUrl: 'app/app.persondetails.html',
      inputs: ['personality', 'events'],
      directives: [app.EventDateDetailsComponent]
    })
    .Class({
      constructor: function() {
      },
      showEventDetails: function(event)
      {
        this.eventObject = event;
        // var eventDetails = event.Description;
        // $("#eventDetails").html(eventDetails);
      }
    });
})(window.app || (window.app = {}));
