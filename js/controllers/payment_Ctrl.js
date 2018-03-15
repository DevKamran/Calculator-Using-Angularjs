app.controller('payment_controller', function($scope) {


   
$scope.calculationForIncome = function(v1,v2,v3,v4,v5){
	/*if(v1==undefined){v1=0;}*/
	$scope.totalIncome = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5));
}//End Function 



$scope.householdExpenses = function(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11){
	$scope.totalhouseholdExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6)+parseInt(v7)+parseInt(v8)+parseInt(v9)+parseInt(v10)+parseInt(v11)   );
}//End Function 


$scope.shoppingExpenses = function(v1,v2,v3,v4,v5,v6,v7,v8){
	$scope.totalshoppingExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6)+parseInt(v7)+parseInt(v8) );
}//End Function 


$scope.entertainmentExpenses = function(v1,v2,v3,v4,v5,v6){
	$scope.totalentertainmentExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6) );
}//End Function 


$scope.personalExpenses = function(v1,v2,v3,v4,v5,v6){
	$scope.totalpersonalExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5)+parseInt(v6) );
}//End Function 


$scope.transportExpenses = function(v1,v2,v3,v4){
	$scope.totalTransportExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4) );
}//End Function 


$scope.DebtExpenses = function(v1,v2,v3,v4){
	$scope.totalDebtExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4) );
}//End Function 

$scope.otherExpenses = function(v1,v2,v3){
	$scope.totalotherExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3) );
}//End Function 

$scope.totalExpenses = function(v1,v2,v3,v4,v5,v6,v7){
	$scope.totalallExpenses = parseInt(parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4)+parseInt(v5) +parseInt(v6)+parseInt(v7)  );
}//End Function 

$scope.leftoverTotalExpenses = function(v1,v2){
	$scope.totalleftoverExpenses = parseInt(parseInt(v1)-parseInt(v2));
}//End Function 

});