(function(app) {
    var HEROES = [
<<<<<<< HEAD
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
  app.TestComponent =
    ng.core.Component({
      selector: 'my-dd',
      template: '<select><option *ngFor="let event of Events" value="{{event.Date}}" [class.selectedEvent]="event === selectedEvent" (click)="onSelect(event)">{{event.Date}}</option></select>'
    })
    .Class({
      constructor: function() {
        var self = this;        
        var xmlhttp = new XMLHttpRequest();
        var url = "data/GandhiLifeEvents.json";

        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            mapPeople(myArr);
          }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      
        var mapPeople = function(myArr){
          //console.log(myArr);
          self.Personality = { "Name": myArr.Personality.Name, "Pic": myArr.Personality.Pic };
          self.Events = myArr.Personality.Event;
          console.log(self.Personality);
          console.log(self.Events);
        }
        
        app.AppComponent.prototype.onSelect = function (event) { this.selectedevent = event; };
      },
    });
})(window.app || (window.app = {}));
=======
      { "id": 0, "name": "Select" },
      { "id": 1, "name": "Mohandas Karamchand Gandhi" },
      { "id": 2, "name": "Abraham Lincoln" }      
   ];
  app.testComponent =
    ng.core.Component({
      selector: 'person-dropdown',
      template: `<select><option *ngFor="let hero of heroes" value="{{hero.id}}">{{hero.name}}</option></select>`
    })
    .Class({
      constructor: function() {
          console.log('inside constructor');
          this.heroes = HEROES;
      }
    });
})(window.app || (window.app = {}));
>>>>>>> origin/master
