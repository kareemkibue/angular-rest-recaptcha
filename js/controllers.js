var appControllers =  angular.module('appControllers', []);

appControllers.controller('ContactController', ['$scope','appService', function ($scope, appService){
    $scope.contact={};   
    $scope.val={};

    $scope.send = function(){
        Recaptcha.reload();

        if ($scope.contactForm.$valid){ 

            appService.verify($scope.contact.captcha).then(function(response){	
                if (response.data.result=="valid"){

                	$scope.val.feedback="Message Sent";

                    /*appService.sendMessage($scope.contact).then(function(response){            
                        //console.log(response.data.result);            

                        if (response.data.result==true){
                            $scope.contact={};
                            $scope.val.feedback="Message Sent";
                        }
                        else{
                            $scope.val.feedback="Failed to Send Message. Try Again Later!";   
                        }
                    }); */ 
                }      
                else{
                    $scope.val.feedback="Incorrect Code! Please try again.";
                }   
                    
            }); 
        }
        else{        	
            $scope.val.submitted=true;
            console.log($scope.contactForm.message);
        }   

    };     

}]);
