**JavaScript Love Calculator - Randomization and Control Flow**

**Recap: Randomization in JavaScript**

we built a basic Love Calculator using JavaScript’s Math.random() function. 
This function generates a pseudo-random floating point number between 0 (inclusive) and 1 (exclusive), which we then scaled to get a number between 1 and 100.

**Introducing Conditionals for Custom Messages**

Now, wouldn’t it be great if we could provide users with a custom message based on their love score? To achieve this, we need to evaluate their score and respond accordingly using **conditional statements**.

**Understanding Conditionals (If-Else Statements)**

Conditional statements allow us to execute different pieces of code based on whether a certain condition is met.

**Basic If-Else Statement**

if (track === "clear") {

goStraight();

} else {

turnRight();

}

In this example, if the track variable is equal to "clear", the function goStraight() is executed. Otherwise, turnRight() is executed instead. This process of guiding the program’s behavior based on conditions is known as **Control Flow**.

**Comparatives and Equality Operators**

JavaScript provides several comparison operators to evaluate conditions:

- \=== (Strict Equality): Checks if two values are equal **and** have the same data type.
- !== (Strict Inequality): Checks if two values are **not** equal or have different data types.
- \== (Loose Equality): Checks if two values are equal but does **not** consider data type.
- != (Loose Inequality): Checks if two values are **not** equal without considering data type.
- \> (Greater Than), &lt; (Less Than), &gt;= (Greater Than or Equal To), <= (Less Than or Equal To): Compare numeric values.

**Example:**

let a = 1;

let b = "1";

console.log(a === b); // false (different data types)

console.log(a == b); // true (values are the same, but type is ignored)

**Applying Conditionals to the Love Calculator**

We already have our love score generated between 1 and 100. Now, let’s add conditions to display different messages based on the score.

**Checking for Specific Scores**

if (loveScore === 100) {

alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");

} else {

alert("Your love score is " + loveScore + "%.");

}

Since getting an exact 100 score is rare, we might want to check for a **range** of scores instead.

**Checking for a Score Range**

if (loveScore > 70) {

alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");

} else if (loveScore > 30) {

alert("Your love score is " + loveScore + "%. Your relationship is okay.");

} else {

alert("Your love score is " + loveScore + "%. You go together like oil and water.");

}

**Summary**

- **Randomization**: We used Math.random() to generate a random love score between 1 and 100.
- **Conditionals**: We used if-else statements to display different messages based on the love score.
- **Comparatives**: We explored equality and comparison operators to refine our conditions.
- **Control Flow**: Our program now reacts dynamically to different user inputs, making it more engaging.

