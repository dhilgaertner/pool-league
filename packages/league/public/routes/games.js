'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        // Check if the user is connected
        var checkLoggedin = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0') $timeout(deferred.resolve);

                // Not Authenticated
                else {
                    $timeout(deferred.reject);
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };

        // states for my app
        $stateProvider
            .state('all games', {
                url: '/games',
                templateUrl: 'league/views/games/list.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('create game', {
                url: '/games/create',
                templateUrl: 'league/views/games/create.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('edit game', {
                url: '/games/:gameId/edit',
                templateUrl: 'league/views/games/edit.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('game by id', {
                url: '/games/:gameId',
                templateUrl: 'league/views/games/view.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            });
    }
]);
