myApp.factory('appService', ['$http', function ($http){
	var factory={};

	factory.verify=function(captcha){
		return $http({
		    url: "rest/index.php/api/validate/verify/",
		    method: "POST",
		    data: {
		    	response: captcha.response,
		    	challenge: captcha.challenge,
		    	remoteip: '0'
			}
		}).success(function(data) {	    
	  	 	return data;		    
		}).error(function(data) {
	    	return data;
		});			
	}	
	

	return factory;
}]);