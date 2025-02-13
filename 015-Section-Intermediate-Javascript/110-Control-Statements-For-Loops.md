\### For Loop Explanation

A for loop allows you to repeat a block of code a specific number of times. The syntax is:

\`\`\`javascript

for (initialization; condition; increment) {

// Code to be executed

}

\`\`\`

\### Example of a Simple For Loop

1\. \*\*Initialization\*\*: Setting the starting point (\`let i = 1;\`).

2\. \*\*Condition\*\*: Loop runs as long as this condition is true (\`i < 2\`).

3\. \*\*Increment\*\*: Update the loop counter (\`i++\`).

Here's an example:

\`\`\`javascript

for (let i = 1; i < 2; i++) {

console.log(i); // Prints the current value of i

}

\`\`\`

\### Modifying FizzBuzz with a For Loop

To print the sequence for the first 100 numbers, you can use a for loop:

\`\`\`javascript

for (let count = 1; count <= 100; count++) {

if (count % 3 === 0 && count % 5 === 0) {

console.log("FizzBuzz");

} else if (count % 3 === 0) {

console.log("Fizz");

} else if (count % 5 === 0) {

console.log("Buzz");

} else {

console.log(count);

}

}

\`\`\`

\### Explanation

\- \*\*Initialization\*\*: \`let count = 1;\` sets the starting point.

\- \*\*Condition\*\*: The loop runs as long as \`count <= 100\` is true.

\- \*\*Increment\*\*: \`count++;\` increments the count by 1 each time the loop runs.

\### For Loop vs. While Loop

\- \*\*While Loop\*\*: Useful when you want to keep looping as long as a certain condition is true.

\- \*\*For Loop\*\*: Ideal when you know how many times you want the loop to run.

\### Using For Loop for the "99 Bottles of Beer" Challenge

Here is a solution using a for loop:

\`\`\`javascript

function printLyrics() {

for (let count = 99; count > 0; count--) {

console.log(\`${count} bottles of beer on the wall, ${count} bottles of beer.\`);

console.log(\`Take one down and pass it around, ${count - 1} bottles of beer on the wall.\`);

console.log(''); // Add an empty line for better readability

}

// After the loop ends, print the final line of the song

console.log('No more bottles of beer on the wall, no more bottles of beer.');

console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');

}

// Call the function to see the output in the console

printLyrics();

\`\`\`

This function uses a for loop to print each verse of the song until there are no more bottles left. The loop runs as long as \`count\` is greater than 0, and \`count--\` decreases the count by 1 each time.

\### Summary

\- \*\*For Loops\*\*: Concise and easy to read when you know the exact number of iterations.

\- \*\*While Loops\*\*: Better for situations where you continue looping based on a condition.

