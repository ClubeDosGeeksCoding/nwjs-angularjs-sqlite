var app = angular.module('cdg', [require('angular-route')]);

app.config(function($routeProvider){
	$routeProvider.when("/pessoas", {
		templateUrl : "views/pessoa.html",
		controller : "pessoaController",
        access: { requiredLogin: false }
	});
});