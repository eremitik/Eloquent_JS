//chapter 3

//Parameters and Scopes
var x = 'outside'
function f1(){
	var x = 'inside f1';
};
f1();
console.log(x); //returns 'outside'


function f2(){
	x = 'inside f2';
};
f2();
console.log(x); //returns 'inside f2'



//Nested Scope
var landscape = function(){
	var result = "";
	function flat(size){
		for (var count=0; count<size; count++)
			result += "_";
	};
	function mountain(size){
		result += "/";
		for (var count=0; count<size; count++)
			result += "'";
		result += "\\";
	};
	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
};
console.log(landscape())   // returns "___/''''\______/'\_"



// Optional Arguments
function power(base, exponent){
	if (exponent==undefined)
		exponent = 2;
	var result = 1;
	for (var count=0; count<exponent; count++)
		result *= base;
	return result;
}
console.log(power(4));		// returns 16, as exponent is undef so '2' is used. 
console.log(power(4,3));	// returns 64, exponent arg is given



// Closure
function multiplier(factor){
	return function(num){
		return num*factor;
	};
}
console.log(multiplier(2));	// returns [Function (anonymous)] as no second arg was given later. 
console.log(multiplier(2, 5)); // returns [(Function (anonymous)] again as args weren't setup as (factor, num) initially

var x = multiplier(2);
console.log(x(5)); 			// return 10, since the first time 2 was cached, then 5 was second arg




//Recursion
function power_two(base, exp){
	if (exp==0)
		return 1;
	else
		return base*power_two(base, exp-1);
}
console.log(power_two(2,3));	// returns 8, the exp arg now acts as a counter in a for loop



function factorial(n){			// YT explanation: https://www.youtube.com/watch?v=LteNqj4DFD8
	if (n==1 || n==0)
		return 1;
	else
		return n*factorial(n-1)
}
console.log(factorial(4));		// returns 24, as n acts as a counter in a for loop



// Growing Functions
function printFarmInventory(cows, chickens){
	
	var cowString = String(cows);
	while (cowString.length<3)
		cowString = "0"+cowString;
	console.log(cowString+" Cows");

	var chickenString = String(chickens);
	while (chickenString.length<3)
		chickenString = "0"+chickenString;
	console.log(chickenString+" Chickens");
}
printFarmInventory(7,11);

//what if we add 'pigs' arg? Maybe more animals? Will get long. So we function out the concept of adding 0's.
function zeroPad(num, width){
	var string = String(num);
	while (string.length<width)
		string="0"+string;
	return string;
}
function printFarmInventory_upgraded(cows, chickens, pigs){
	console.log(zeroPad(cows,3)+" Cows");
	console.log(zeroPad(chickens,3)+" Chickens");
	console.log(zeroPad(pigs,3)+" Pigs");
}
printFarmInventory_upgraded(7, 16, 3);		// returns as expected. its easier now to add hens, sheep, etc. Also, gives control on amount of 0's to pad for each animal, for ex. if cows needs to count thousands.



