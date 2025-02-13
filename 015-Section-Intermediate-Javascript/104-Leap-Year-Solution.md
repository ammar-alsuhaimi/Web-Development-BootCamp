\## Step-by-Step Guide to Tackling the Leap Year Challenge

\### 1. Initial Check: Divisibility by 4

\- \*\*Question\*\*: Is the year cleanly divisible by 4?

\- \*\*Code\*\*:

\`\`\`javascript

if (year % 4 === 0) {

// Further checks needed

} else {

return "Not leap year.";

}

\`\`\`

\- \*\*Explanation\*\*: If the year is not divisible by 4, it is definitely not a leap year.

\### 2. Second Check: Divisibility by 100

\- \*\*Question\*\*: Is the year cleanly divisible by 100?

\- \*\*Code\*\*:

\`\`\`javascript

if (year % 4 === 0) {

if (year % 100 === 0) {

// Further checks needed

} else {

return "Leap year.";

}

}

\`\`\`

\- \*\*Explanation\*\*: If the year is divisible by 4 but not by 100, it is a leap year.

\### 3. Final Check: Divisibility by 400

\- \*\*Question\*\*: Is the year cleanly divisible by 400?

\- \*\*Code\*\*:

\`\`\`javascript

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

\`\`\`

\- \*\*Explanation\*\*: If the year is divisible by 100 but not by 400, it is not a leap year. If it is divisible by 400, it is a leap year.

\### Full JavaScript Code

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

\`\`\`

\### Summary

1\. \*\*Divisibility by 4\*\*: Check if the year is divisible by 4.

2\. \*\*Divisibility by 100\*\*: If yes, check if the year is divisible by 100.

3\. \*\*Divisibility by 400\*\*: If yes, check if the year is divisible by 400.

4\. \*\*Return Result\*\*: Based on the checks, return either "Leap year." or "Not leap year."

\### Conclusion

Using a flowchart to visualize the logic can simplify the process of writing the code. Once the logic is clear, translating it into code becomes straightforward. Keep practicing to strengthen your understanding of conditional statements and logical operators!
