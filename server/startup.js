Meteor.startup(function() {

    Accounts.loginServiceConfiguration.remove({
        service: 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
        service: 'twitter',
        consumerKey: Meteor.settings.consumer_key,
        secret: Meteor.settings.consumer_secret
    });

});
