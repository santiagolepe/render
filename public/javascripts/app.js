'use strict';

var loadingSpinner = angular.module('loadingSpinner', []);
    loadingSpinner.config(function ($httpProvider) {
        $httpProvider.responseInterceptors.push('myHttpInterceptor');
        var spinnerFunction = function (data, headersGetter) {
            // todo start the spinner here
            $('#spinner').show();
            return data;
        };
        $httpProvider.defaults.transformRequest.push(spinnerFunction);
    })
// register the interceptor as a service, intercepts ALL angular ajax http calls
    .factory('myHttpInterceptor', function ($q, $window) {
        return function (promise) {
            return promise.then(function (response) {
                // do something on success
                // todo hide the spinner
                $('#spinner').hide();
                return response;

            }, function (response) {
                // do something on error
                // todo hide the spinner
                $('#spinner').hide();
                return $q.reject(response);
            });
        };
    });

var render = angular.module('render', ['ngGrid']);

render.run(function ($rootScope, $location, $http, $timeout){
});

