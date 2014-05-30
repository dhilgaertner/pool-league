'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var League = new Module('League');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
League.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    League.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    League.menus.add({
        'roles': ['authenticated'],
        'title': 'Log Game',
        'link': 'create game'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Articles.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Articles.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settigns
    Articles.settings(function (err, settings) {
      //you now have the settings object
    });
    */
    League.aggregateAsset('css', 'league.css');

    return League;
});
