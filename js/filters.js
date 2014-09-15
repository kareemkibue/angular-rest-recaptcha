/*angular.module('myApp.filters', [])
	.filter('status', function() {
	return function(input) {

		if(input==1){
			return "Yes";
		}
		else{
			return "No";
		}
	}
});*/

myApp.filter('status', function() {
	return function(input) {

		if(input=="true" || input==1){
			return "Yes";
		}
		else{
			return "No";
		}
	}
});

myApp.filter('anonimity', function() {
	return function(input) {

		if(input=="" || input==null || input=="null" || input==0){
			return "Anonymous User";
		}
		else{
			return "("+input+")";
		}
	}
});

myApp.filter('nfcurrency', [ '$filter', '$locale', function ($filter, $locale) {
    var currency = $filter('currency'), formats = $locale.NUMBER_FORMATS;
    return function (amount, symbol) {
        var value = currency(amount, symbol);
        return value.replace(new RegExp('\\' + formats.DECIMAL_SEP + '\\d{2}'), '')
    }       
}]);


myApp.filter('capitalize', function() {
	return function(input) {		
		if (input)
		return input[0].toUpperCase() + input.slice(1);
	}
});