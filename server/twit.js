if (Meteor.isServer) {
  Meteor.startup(function () {

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
        consumer_key:         Meteor.settings.consumer_key,
        consumer_secret:      Meteor.settings.consumer_secret,
        access_token:         Meteor.settings.access_token,
        access_token_secret:  Meteor.settings.access_token_secret
    });

  });
}
