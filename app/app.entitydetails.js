(function(app) {
  app.EventDetailComponent =
    ng.core.Component({
      selector: 'gigo-event-detail',
      templateUrl: 'app/app.entitydetails.html',
      inputs: ['Personality', 'Event']
    })
    .Class({
      constructor: function() {
          this.Personality = {
              "Name": "Mahatma Gandhi",
              "Pic": "http://www.history.co.uk/sites/default/files/bios/mahatmagandhi225.jpg"
          };
          this.Event = {
            "Date": "02/11/1869",
            "Location": " Porbandar,Gujrat",
            "latitude": "21.641707",
            "longitude": "69.629265",
            "Description": "Mahatma Gandhi, was born on October 2, 1869, in Porbandar, Kathiawar, India, which was then part of the British Empire. His father, Karamchand Gandhi, served as a chief minister in Porbandar and other states in western India. His mother, Putlibai, was a deeply religious woman who fasted regularly. Gandhi grew up worshiping the Hindu god Vishnu and following Jainism, a morally rigorous ancient Indian religion that espoused non-violence, fasting, meditation and vegetarianism.",
            "link": "http://www.history.co.uk/biographies/mahatma-gandhi"
          };
      }
    });
})(window.app || (window.app = {}));
