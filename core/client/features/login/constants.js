var app = angular.module('app');

app.constant("AUTH_EVENTS", {
	notAuthenticated: "auth-not-authenticated"
});

var url = process.env.database + "/api";
app.constant("API_ENDPOINT", {
	url: url
});

