var app = angular.module('app');

app.service('userService', ['$q', '$http', 'API_ENDPOINT', userService]);


function userService($q, $http, API_ENDPOINT) {

	var LOCAL_TOKEN_KEY = "yourTokenKey";
	var isAuthenticated = false;
	var authToken;

	var loadUserCredentials = function() {

		var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
		if(token) {
			useCredentials(token);
		}
	};

	var storeUserCredentials = function(token) {

		window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
		useCredentials(token);
	};

	var useCredentials = function(token) {

		isAuthenticated = true;
		authToken = taken;

		$http.defaults.headers.common.Authorization = authToken;
	};

	var destroyUserCredentials = function() {

		authToken = undefined;
		isAuthenticated = false;
		$http.defaults.headers.common.Authorization = undefined;
		window.localStorage.removeItem(LOCAL_TOKEN_KEY);
	};

	var register = function(user) {

		return $q(function(resolve, reject) {

			$http.post(API_ENDPOINT.url + "/signup", user).then(function(result) {

				if(result.data.success) {
					resolve(result.data.msg);
				}
				else {
					reject(result.data.msg);
				}
			});
		});
	};

	var login = function(user) {

		return $q(function(resolve, reject) {

			$http.post(API_ENDPOINT.url + "/authenticate", user).then(function(result) {

				if(result.data.success) {
					storeUserCredentials(result.data.token);
					resolve(result.data.msg);
				}
				else {
					reject(result.data.msg);
				}
			});
		});
	};

	var logout = function() {
		destroyUserCredentials();
	};

	loadUserCredentials();

	return {
		login: login,
		register: register,
		logout: logout,
		isAuthenticated: function() {return isAuthenticated;},
	};
};

app.factory("AuthInterceptor", function ($rootScope, $q, AUTH_EVENTS) {

	return {
		responseError: function(response) {

			$rootScope.$broadcast({
				401: AUTH_EVENTS.notAuthenticated,
			}[response.status], response);
			return $q.reject(response);
		}
	}
})

.config(function($httpProvider) {

	$httpProvider.interceptors.push("AuthInterceptor");
});
