\### Introduction to While Loops

A while loop allows you to run a block of code as long as a specified condition is true.

\### Example of a Simple While Loop

1\. \*\*Initialize the Variable\*\*:

\`\`\`javascript

let i = 1; // i starts at 1

\`\`\`

2\. \*\*While Loop\*\*:

\`\`\`javascript

while (i < 2) {

console.log(i); // Prints the current value of i

i++; // Increments i by 1

}

\`\`\`

\### Explanation of the While Loop

\- \*\*Initialize the Variable\*\*: \`let i = 1;\` sets the initial value of \`i\` to 1.

\- \*\*Condition\*\*: The loop will continue to run as long as \`i < 2\` is true.

\- \*\*Code Execution\*\*: Inside the loop, \`console.log(i);\` prints the value of \`i\`.

\- \*\*Increment\*\*: \`i++;\` increments \`i\` by 1. When \`i\` reaches 2, the condition \`i < 2\` is false, and the loop stops.

\### Modifying FizzBuzz with a While Loop

To print the sequence for the first 100 numbers, you can use a while loop:

1\. \*\*Initialize the Count Variable\*\*:

\`\`\`javascript

let count = 1; // count starts at 1

\`\`\`

2\. \*\*While Loop for FizzBuzz\*\*:

\`\`\`javascript

while (count <= 100) {

if (count % 3 === 0 && count % 5 === 0) {

console.log("FizzBuzz");

} else if (count % 3 === 0) {

console.log("Fizz");

} else if (count % 5 === 0) {

console.log("Buzz");

} else {

console.log(count);

}

count++;

}

\`\`\`

\### Explanation

\- \*\*Initialization\*\*: \`let count = 1;\` sets the initial value of \`count\` to 1.

\- \*\*Condition\*\*: The loop runs as long as \`count <= 100\` is true.

\- \*\*FizzBuzz Logic\*\*: Checks if \`count\` is divisible by 3 and 5, only by 3, or only by 5, and prints the corresponding value.

\- \*\*Increment\*\*: \`count++;\` increments the count by 1. When \`count\` reaches 101, the condition \`count <= 100\` is false, and the loop stops.

\### Infinite Loop Warning

To prevent an infinite loop, ensure the condition will eventually become false by properly incrementing the variable.

\### "99 Bottles of Beer" Challenge Solution

Here is a solution for printing the lyrics of "99 Bottles of Beer" using a while loop:

\`\`\`javascript

function printLyrics() {

let count = 99; // Initialize the count variable to 99

while (count > 0) { // Check if the count is greater than 0

console.log(\`${count} bottles of beer on the wall, ${count} bottles of beer.\`);

count--; // Decrease the count by 1

console.log(\`Take one down and pass it around, ${count} bottles of beer on the wall.\`);

console.log(''); // Add an empty line for better readability

}

// After the loop ends, print the final line of the song

console.log('No more bottles of beer on the wall, no more bottles of beer.');

console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');

}

// Call the function to see the output in the console

printLyrics();

\`\`\`

This function uses a while loop to print each verse of the song until there are no more bottles left. The loop runs as long as \`count\` is greater than 0.



<https://www.99-bottles-of-beer.net/lyrics.html>