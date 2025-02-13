**The Problem:**

You were asked to create a function lifeInWeeks(age) that takes your current age as an input and calculates how many **days**, **weeks**, and **months** are left until you reach the age of 90. You are also supposed to output this information in a specific sentence format.

**Steps to Solve:**

1. **Define the function** lifeInWeeks(age) and receive the user's current age as input.
2. **Calculate remaining time**:
    - **Years remaining**: Subtract the current age from 90 (since we’re assuming you’ll live to 90).
    - var yearsRemaining = 90 - age;
    - **Days remaining**: Multiply the remaining years by 365 (number of days in a year).
    - var days = yearsRemaining \* 365;
    - **Weeks remaining**: Multiply the remaining years by 52 (number of weeks in a year).
    - var weeks = yearsRemaining \* 52;
    - **Months remaining**: Multiply the remaining years by 12 (number of months in a year).
    - var months = yearsRemaining \* 12;
3. **Format the output**:
    - Concatenate the calculated values into a string to produce the desired output:
    - console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
4. **Testing**:
    - Call the function with a test age (e.g., 12) and check if the output matches the expected result.
    - lifeInWeeks(12);

**Full Solution:**

function lifeInWeeks(age) {

var yearsRemaining = 90 - age; // Calculate the years remaining

var days = yearsRemaining \* 365; // Calculate the remaining days

var weeks = yearsRemaining \* 52; // Calculate the remaining weeks

var months = yearsRemaining \* 12; // Calculate the remaining months

// Output the result in the exact required format

console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

// Example test:

lifeInWeeks(12); // Output: "You have 28470 days, 4056 weeks, and 936 months left."

**Points to Keep in Mind:**

- **Mathematical operations**: You used basic arithmetic (multiplication) to calculate the remaining days, weeks, and months.
- **String concatenation**: The + operator was used to combine the text and the calculated values into a sentence.
- **Precise output formatting**: You had to ensure the output was in the exact format requested, which is important when solving coding challenges.





