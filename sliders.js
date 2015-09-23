// DOCTOR COLLECTION
DoctorAwareness = new Mongo.Collection('doctorAwareness');

if (Meteor.isClient) {

  Session.setDefault("slider-clarity", [50]);
  Session.setDefault("slider-bias", [50]);
  Session.setDefault("slider-comfort", [50]);
  Session.setDefault("slider-structure", [50]);

  Template.sliders.rendered = function () {
    
    // CLARITY SLIDER
    this.$("#slider-clarity").noUiSlider({
      start: Session.get("slider-clarity"),
      range: {
        'min': 0,
        'max': 100
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-clarity', Math.round(val));
    });

    // BIAS SLIDER
    this.$("#slider-bias").noUiSlider({
      start: Session.get("slider-bias"),
      range: {
        'min': 0,
        'max': 100
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-bias', Math.round(val));
    });

    // COMFORT SLIDER
    this.$("#slider-comfort").noUiSlider({
      start: Session.get("slider-comfort"),
      range: {
        'min': 0,
        'max': 100
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-comfort', Math.round(val));
    });

    // STRUCTURE SLIDER
    this.$("#slider-structure").noUiSlider({
      start: Session.get("slider-structure"),
      range: {
        'min': 0,
        'max': 100
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-structure', Math.round(val));
    });
  };


  Template.sliders.helpers({
    sliderClarity: function () {
      return Session.get("slider-clarity");
    },
    sliderBias: function () {
      return Session.get("slider-bias");
    },
    sliderComfort: function () {
      return Session.get("slider-comfort");
    },
    sliderStructure: function () {
      return Session.get("slider-structure");
    }
  });

  Template.body.helpers({
    doctorAwareness: function() {
      return DoctorAwareness.find();
    }
  });

  Template.body.events({
    'submit .doctor-awareness': function(event) {

      var parameters = {
        clarity: Session.get('slider-clarity'),
        bias: Session.get('slider-bias'),
        comfort: Session.get('slider-comfort'),
        structure: Session.get('slider-structure'),
        createdAt: new Date()
      }

      DoctorAwareness.insert(parameters);

      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}