\## Using Comparatives and Logical Operators in Conditional Statements

\### Comparatives:

\- \*\*Greater than (>)\*\*

\- \*\*Less than (<)\*\*

\- \*\*Equal to (==)\*\*

\### Logical Operators:

\- \*\*AND (&&)\*\*: Checks if both conditions are true.

\- \*\*OR (||)\*\*: Checks if either condition is true.

\- \*\*NOT (!)\*\*: Checks if the condition is false.

\### Practical Example:

1\. \*\*Original Scenario\*\*:

\- \*\*Goal\*\*: Send different alerts based on love scores.

\- \*\*Condition\*\*:

\- If \`loveScore > 70\`: "You love each other like Kanye loves Kanye."

\- If \`loveScore <= 70\`: Another message.

2\. \*\*Enhanced Scenario\*\*:

\- \*\*Goal\*\*: Fine-tune the alerts for additional conditions.

\- \*\*Condition\*\*:

\- If \`loveScore > 30 && loveScore <= 70\`: Simple love score alert.

\- If \`loveScore > 70\`: "You love each other like Kanye loves Kanye."

\- If \`loveScore <= 30\`: "You go together like oil and water."

\### Code Implementation:

\- \*\*If statements\*\*:

\`\`\`javascript

if (loveScore > 70) {

alert("You love each other like Kanye loves Kanye.");

} else if (loveScore > 30 && loveScore <= 70) {

alert("Your love score is " + loveScore);

} else {

alert("You go together like oil and water.");

}

\`\`\`

\### Summary:

1\. Use comparatives to compare variable values.

2\. Combine comparatives with logical operators (AND, OR, NOT) to create more refined conditions.

3\. Implement these conditions in code to display different alerts based on the variable values.

This allows you to handle multiple scenarios and provide more specific feedback based on the conditions met. 