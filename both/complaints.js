Complaints = new Mongo.Collection('complaints');

Complaints.attachSchema(new SimpleSchema({
    numberplate: {
        type: String,
        max: 12,
        label: "Number Plate"
    },
    reporter: {
        type: String,
        max: 20,
        autoValue: function () {
          if (Meteor.user())
            return "@"+Meteor.user().services.twitter.screenName;
          else
            return "Anonymous"
        },
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    reportedAt: {
        type: Date,
        autoValue: function() {
          return new Date();
        },
        autoform: {
            type: "hidden"
        }
    },
    violationType: {
        type: String,
        allowedValues: ['Drove Through Red Light', 'Slow Driving', 'Talking on Phone', 'Kak Parking', 'Swerving', 'Other'],
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    }
}));
