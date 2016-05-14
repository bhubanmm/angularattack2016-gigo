(function(app) {
  'use strict';
    
  app.MyLocation = 
    ng.core.Component({
      selector: 'my-loc',
      template: '<div>Location: [{{lat}}, {{lon}}]</div>'
    })
    .Class({
      constructor: function() {
        var self = this;
        var geoOptions = {
            enableHighAccuracy: true
        }

        navigator.geolocation.getCurrentPosition(function(position) {
          self.lat = position.coords.latitude;
          self.lon = position.coords.longitude;
          console.log(self.lat + ', ' + self.lon);
        }, function(error) {
          console.log('Error occurred. Error code: ' + error.code);
          // error.code can be:
          //   0: unknown error
          //   1: permission denied
          //   2: position unavailable (error response from location provider)
          //   3: timed out
        }, geoOptions);
        
        // var http = ng.core.http;
        // http.get('/data/GandhiLifeEvents.json');
      }
    });
})(window.app || (window.app = {}));
