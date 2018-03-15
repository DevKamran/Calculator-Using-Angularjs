var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

  
  

 $scope.$watch('ApplicationID', function (now, old) {
      if (now) {
        $scope.result = '1';
      } else {
        $scope.result = '0';
      }
    });


     $scope.$watch('FirstName', function (now, old) {
      if (now) {
        $scope.result = '2';
      } else {
        $scope.result = '1';
      }
    });


      $scope.$watch('LastName', function (now, old) {
      if (now) {
        $scope.result = '3';
      } else {
        $scope.result = '2';
      }
    });


       $scope.$watch('MobileNumber', function (now, old) {
      if (now) {
        $scope.result = '4';
      } else {
        $scope.result = '3';
      }
    });

       $scope.$watch('EmailAddress', function (now, old) {
      if (now) {
        $scope.result = '5';
      } else {
        $scope.result = '4';
      }
    });  



        $scope.$watch('ApplicationFeefor', function (now, old) {
      if (now) {
        $scope.result = '6';
      } else {
        $scope.result = '5';
      }
    }); 

        
    
       $scope.$watch('termconditions', function (now, old) {
      if (now) {
        $scope.result = '7';
      } else {
        $scope.result = '6';
      }
    });


     $scope.$watch('DebitCard', function (now, old) {
      if (now) {
        $scope.result = '8';
      } else {
        $scope.result = '7';
      }
    });  


     $scope.$watch('Cvcnumber', function (now, old) {
      if (now) {
        $scope.result = '9';
      } else {
        $scope.result = '8';
      }
    }); 


       $scope.$watch('namecard', function (now, old) {
      if (now) {
        $scope.result = '10';
      } else {
        $scope.result = '9';
      }
    }); 



        $scope.$watch('selectmonth', function (now, old) {
      if (now) {
        $scope.result = '11';
      } else {
        $scope.result = '10';
      }
    }); 
    

    $scope.$watch('selectyear', function (now, old) {
      if (now) {
        $scope.result = '12';
      } else {
        $scope.result = '0';
      }
    }); 
        


});



