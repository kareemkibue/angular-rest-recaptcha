var myApp = angular.module('myApp', ['ngRoute','appControllers','reCAPTCHA']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true).hashPrefix('!');
		
		$routeProvider.
		when('/', {
			title: 'Contact',
			templateUrl: 'partials/form.html'
		}).otherwise({
			redirectTo: '/'
		});               	
}]);


myApp.config(function (reCAPTCHAProvider) {
    // required: please use your own key :)
	var pKey="";	//public key 	
    reCAPTCHAProvider.setPublicKey(pKey);

    // optional: gets passed into the Recaptcha.create call
    reCAPTCHAProvider.setOptions({
        theme: 'red'
    });
});