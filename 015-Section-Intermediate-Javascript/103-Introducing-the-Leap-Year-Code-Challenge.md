\## Leap Year Coding Challenge Summary

\### Introduction:

\- Understand the rules that determine whether a year is a leap year.

\- Apply these rules to create a program that accurately identifies leap years.

\### Rules for Determining Leap Years:

1\. \*\*Divisible by 4\*\*: A year is a leap year if it is evenly divisible by 4.

2\. \*\*Exception for 100\*\*: A year that is divisible by 100 is not a leap year.

3\. \*\*Exception for 400\*\*: A year that is divisible by 100 but also divisible by 400 is a leap year.

\### Example Analysis:

\- \*\*Year 2000\*\*:

\- Divisible by 4: 2000 / 4 = 500 (cleanly divisible)

\- Divisible by 100: 2000 / 100 = 20 (cleanly divisible)

\- Divisible by 400: 2000 / 400 = 5 (cleanly divisible)

\- Result: Leap year

\### Steps to Determine Leap Year:

1\. Check if the year is divisible by 4.

\- If not, it is not a leap year.

2\. If divisible by 4, check if the year is divisible by 100.

\- If not, it is a leap year.

3\. If divisible by 100, check if the year is divisible by 400.

\- If not, it is not a leap year.

\- If yes, it is a leap year.

\### Code Implementation:

\- Create a flowchart to visualize the decision process.

\- Write the code to output "Leap year." or "Not leap year."

\### Example Code in JavaScript:

\`\`\`javascript

function isLeapYear(year) {

if (year % 4 === 0) {

if (year % 100 === 0) {

if (year % 400 === 0) {

return "Leap year.";

} else {

return "Not leap year.";

}

} else {

return "Leap year.";

}

} else {

return "Not leap year.";

}

}

// Test the function with example years

console.log(isLeapYear(2000)); // "Leap year."

console.log(isLeapYear(1900)); // "Not leap year."

console.log(isLeapYear(2024)); // "Leap year."

console.log(isLeapYear(2023)); // "Not leap year."

\`\`\`

\### Conclusion:

\- Use logical flow and decision-making in programming.

\- Ensure the output matches the required format for successful challenge completion.

\- Practice with known examples to validate the code.
