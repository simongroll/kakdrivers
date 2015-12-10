Meteor.publish('complaints', function() {
    return Complaints.find();
});

Meteor.publish('user-complaints', function() {
    // TODO: return complaints with this userId
    return Complaints.find();
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
