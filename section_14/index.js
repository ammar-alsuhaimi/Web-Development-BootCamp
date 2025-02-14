// First Program Example

function test(){
	var a = "3";
	var b = "8";
	var c = a;
	a = b;
	b = c;
	console.log("a is " + a);
	console.log("b is " + b);
}

// Second Program Example

function lifeInWeeks(age){

	var yearsRemaining =90 - age;
	var days = yearsRemaining *365;
	var weeks = yearsRemaining *52;
	var months = yearsRemaining *12;
console.log("You have " + days + " days, " +weeks + " weeks, and " + months + " months left .");
}

// Third Program Example

function bmiCalculator(weight, height){
    var bmi = wight / (height * height);
    return math.round(bmi);
    }
    