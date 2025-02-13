\## Creating a Guest List Checker with JavaScript

\### Introduction:

\- \*\*Scenario\*\*: You have a large guest list for a party and want to manage admissions.

\- \*\*Solution\*\*: Use code to check if a guest is on the list.

\### Steps to Implement:

\### 1. Store Guest Names in an Array:

\- \*\*Arrays\*\*: Collections of related items stored together.

\- \*\*Syntax\*\*:

\`\`\`javascript

var guestList = \["Angela", "Jack", "John", "Sarah", "Michael", "Anna"\];

\`\`\`

\### 2. Prompt the User for Their Name:

\- \*\*Prompt\*\*: Use \`prompt()\` to ask the user for their name.

\`\`\`javascript

var guestName = prompt("What is your name?");

\`\`\`

\### 3. Check if the Name is in the Guest List:

\- \*\*Includes Function\*\*: Use \`.includes()\` to check if the array contains the name.

\`\`\`javascript

if (guestList.includes(guestName)) {

alert("Welcome!");

} else {

alert("Sorry, maybe next time.");

}

\`\`\`

\### Example Code:

\`\`\`javascript

var guestList = \["Angela", "Jack", "John", "Sarah", "Michael", "Anna"\];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {

alert("Welcome!");

} else {

alert("Sorry, maybe next time.");

}

\`\`\`

\### Explanation:

1\. \*\*Array Creation\*\*: Create an array named \`guestList\` containing all guest names.

2\. \*\*Prompt for Name\*\*: Use \`prompt()\` to ask the user for their name and store it in \`guestName\`.

3\. \*\*Check Inclusion\*\*: Use \`.includes()\` to check if \`guestList\` contains \`guestName\`.

4\. \*\*Conditional Alert\*\*: Display an alert based on the inclusion check.

\### Conclusion:

Using arrays and the \`.includes()\` method allows efficient management of a guest list with minimal code. This method avoids the need for extensive conditional statements and makes the code more maintainable.

\### Fun Programmer Joke:

Why did the programmer quit his job? Because he didn't get arrays! 😉

