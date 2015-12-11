Meteor.publish('complaints', function() {
    return Complaints.find();
});

Meteor.publish('your-complaints', function(userId) {

    var reporter = "@"+Meteor.users.findOne(userId).services.twitter.screenName;

    return Complaints.find({reporter: reporter});
});

Meteor.publish('complaint', function(id) {
    return Complaints.find(id);
});

Meteor.publish('userProfile', function(userId) {
        return Meteor.users.find({
            _id: userId
        }, {
            fields: {
                'services': 1
            }
        });
});
