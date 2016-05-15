(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/app.personalities.html',
      directives: [app.PersonDetailComponent]
    })
    .Class({
      constructor: function() {
        var self = this;        
        var xmlhttp = new XMLHttpRequest();
        var url = "data/GreatPersonalitiesLifeEvents.json";

        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            mapPeople(myArr);
          }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      
        var mapPeople = function(myArr){
          self.Personalities = myArr.Personalities;
          self.selectedEntity = self.Personalities[0];
          self.eventsForPerson = self.selectedEntity.Events;
        };        
        
        app.AppComponent.prototype.onSelect = function (personality) {
          this.selectedEntity = personality;
          this.eventsForPerson = personality.Events;
        };
        }
    });
    
})(window.app || (window.app = {}));