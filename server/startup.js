Meteor.startup(function() {

    // console.log("App started");
    // console.log("TODO: analytics");
    // console.log("TODO: cron to scrape twitter");

    Accounts.loginServiceConfiguration.remove({
        service: 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
        service: 'twitter',
        consumerKey: 'CDrTWXiNkwHh7QPuaNz4lDmf2',
        secret: 'PylzIw12zu0cFDs0iQiIZFIr36jANxkVfHRYz8hsmkVzGuv0H4'
    });

});
