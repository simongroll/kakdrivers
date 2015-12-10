// Cheap pluralization
UI.registerHelper('pluralize', function(count, word) {
    return count === 1 ? '1 ' + word : count + ' ' + word + 's';
});

// Outputs e.g. 12 days ago or 2 hours ago
UI.registerHelper('showTimeAgo', function(date) {
    //Attempting workaround to https://github.com/moment/moment/issues/1407
    return !date ? "" : moment(new Date(date)).fromNow();
});

// Outputs e.g. x days
UI.registerHelper('showDaysAgo', function(date) {
    //Attempting workaround to https://github.com/moment/moment/issues/1407
    return !date ? "" : moment().diff(moment(new Date(date)), 'days') + ' days';
});

// Outputs e.g. Jan, 2013
UI.registerHelper('showMonthYear', function(date) {
    return !date ? "" : moment(date).format("MMM, YYYY");
});

// Outputs e.g. 12th Jan, 2013
UI.registerHelper('showDayMonthYear', function(date) {
    //Attempting workaround to https://github.com/moment/moment/issues/1407
    return !date ? "" : moment(new Date(date)).format("Do MMM, YYYY")
});

// Outputs August 30th 2014, 5:33:46 pm
UI.registerHelper('showPrettyTimestamp', function(date) {
    return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm:ss a")
});
