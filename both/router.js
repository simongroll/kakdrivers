Router.configure({
    layoutTemplate: 'layout'
});

Meteor.startup(function() {
    if (Meteor.isClient) {
        var location = Iron.Location.get();
        if (location.queryObject.platformOverride) {
            Session.set('platformOverride', location.queryObject.platformOverride);
        }
    }
});

Router.map(function() {
    this.route('index', {
        path: '/'
    });
    this.route('complaints', {
        waitOn: function() {
            Meteor.subscribe('complaints')
        },
        data: function() {
            return {
                complaints: Complaints.find({}, {
                    sort: {
                        reportedAt: -1
                    }
                })
            };
        }
    });

    this.route('yourComplaints', {
        waitOn: function() {
            Meteor.subscribe('your-complaints', Meteor.userId());
        },
        data: function() {
            return {
                complaints: Complaints.find({}, {
                    sort: {
                        reportedAt: -1
                    }
                })
            };
        }
    });

    this.route('add', {
        onBeforeAction: function() {
            if (!Meteor.userId()) {
                Router.go('login');
                // this.render('login');
                // return pause();
                this.next();
            } else {
                this.next();
            }
        },
        waitOn: function() {
            [Accounts.loginServicesConfigured(),
                Meteor.subscribe("userProfile", Meteor.userId())
            ];
        }
    });

    this.route('login');

    this.route('actionSheet');
    this.route('backdrop');
    this.route('forms', {
        data: function() {
            return {
                post: Posts.find().fetch()[0]
            };
        }
    });
    this.route('headersFooters');
    this.route('lists');
    this.route('loading');
    this.route('modal');
    this.route('navigation');
    this.route('navigation.one', {
        path: '/navigation/one'
    });
    this.route('navigation.two', {
        path: '/navigation/two'
    });
    this.route('navigation.three', {
        path: '/navigation/three'
    });
    this.route('popover');
    this.route('popup');
    this.route('sideMenu');
    this.route('slideBox');
    this.route('spinner');
    this.route('tabs.one', {
        path: '/tabs/one',
        layoutTemplate: 'tabsLayout'
    });
    this.route('tabs.two', {
        path: '/tabs/two',
        layoutTemplate: 'tabsLayout'
    });
    this.route('tabs.three', {
        path: '/tabs/three',
        layoutTemplate: 'tabsLayout'
    });
    this.route('tabs.four', {
        path: '/tabs/four',
        layoutTemplate: 'tabsLayout'
    });
    this.route('userAccounts');
});

// https://atmospherejs.com/lookback/seo
if (Meteor.isClient) {
    Router.plugin('seo', {
        // only: ['someRoute'],
        // except: ['someOtherRoute'],
        defaults: {
            title: 'Kak Drivers', // Will apply to <title>, Twitter and OpenGraph.
            suffix: 'Report Bad Driving',
            separator: '·',

            description: 'Report drivers from hell', // Will apply to meta, Twitter and OpenGraph.
            image: 'http://domain.com/image.png', // Will apply to Twitter and OpenGraph.

            meta: {
                keywords: ['driving', 'auto', 'complaints']
            },

            twitter: {
                card: 'Kakdrivers - report bad driving',
                creator: '@KakDrivers'
            },

            og: {
                site_name: 'Kak Drivers',
                image: '/images/custom-opengraph.png'
            }
        }
    });
}
