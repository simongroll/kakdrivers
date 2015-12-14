Meteor.startup(function() {

    // console.log("App started");
    // console.log("TODO: analytics");
    // console.log("TODO: cron to scrape twitter");

    Accounts.loginServiceConfiguration.remove({
        service: 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
        service: 'twitter',
        consumerKey: Meteor.settings.consumerKey,
        secret: Meteor.settings.secret
    });

});
