var app = angular.module('app');

app.constant("AUTH_EVENTS", {
	notAuthenticated: "auth-not-authenticated"
});

app.constant("API_ENDPOINT", {
	url: process.env.PORT +"/api"
});

