// First Program Example

// Here's a function that calculates the BMI and returns the appropriate message based on the BMI value:

function bmiMessage(bmi) {
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

// Example usage:
let bmi = 22.5; // Replace with actual BMI value
console.log(bmiMessage(bmi)); // Output: Your BMI is 22.5, so you have a normal weight.

// Second Program Example

// Here's the JavaScript version to determine if a given year is a leap year:

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap year.";
    } else {
        return "Not leap year.";
    }
}

// Example usage:
let year1 = 2400;
console.log(isLeapYear(year1)); // Output: Leap year.

let year2 = 1989;
console.log(isLeapYear(year2)); // Output: Not leap year.


// This function checks the conditions for a leap year:
// 1. The year must be evenly divisible by 4.
// 2. If the year is also evenly divisible by 100, 
// it is not a leap year unless it is also evenly divisible by 400.

// You can use this function to check any given year by passing the year to the `isLeapYear` function. Make sure the output format matches exactly as specified, including punctuation and capitalization. Happy coding! 🚀


// Third Program Example

function whoIsBuyingLunch(names) {
    // Get a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * names.length);
    // Get the name at the random index
    const selectedName = names[randomIndex];
    // Return the message with the selected name
    return selectedName + " is going to buy lunch today!";
}

// Example usage:
const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whoIsBuyingLunch(names)); // Output: Michael is going to buy lunch today!

// Forth Program Example
// Solution to the 99 Bottles Challenge
// This is one of the ways you could have solved the challenge using a while loop. There are many others, as long as you achieve the desired outcome -printing the lyrics to the 99 bottles of beer song- then you are successful! 
// If you've come up with a fancy solution or something different, be sure to share it in the Q&A section for other students to learn from!

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// Fifth Program Example
// Here's a function to generate the Fibonacci sequence up to `n` items:

function fibonacciGenerator(n) {
    // Create an array to store the sequence
    let fibonacciArray = [];
    
    // Handle the first two numbers in the sequence
    if (n > 0) fibonacciArray.push(0);
    if (n > 1) fibonacciArray.push(1);
    
    // Generate the rest of the sequence
    for (var i = 2; i < n; i++) {
        let nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextNumber);
    }
    
    // Return the Fibonacci sequence as an array
    return fibonacciArray;
}

// Example usage:
console.log(fibonacciGenerator(3)); // Output: [0, 1, 1]
console.log(fibonacciGenerator(7)); // Output: [0, 1, 1, 2, 3, 5, 8]


// This function initializes an empty array to store the Fibonacci sequence. 
// It adds the first two numbers, 0 and 1, if `n` is greater than 0 and 1, respectively. 
// Then, it uses a for loop to generate the remaining numbers in the sequence by summing the two previous numbers and adding the result to the array. 
// Finally, the function returns the array containing the Fibonacci sequence. You can use this function to generate the sequence with any number of items.