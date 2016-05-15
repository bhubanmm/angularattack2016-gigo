(function(app) {
    var HEROES = [
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