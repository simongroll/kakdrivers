Template.landing.events({
    'click button#login-twitter': function(evt, tmpl) {
        Meteor.loginWithTwitter(function(e, r) {
            if (!e) {
            Router.go("index");
            } else {
            alert("error: " + e);
            }
        });
    }
});
