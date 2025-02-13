**Introduction**

Welcome back! In this module, we will explore essential JavaScript features such as:

- **Randomization**
- **Control Flow** (If-Else Statements)

To make learning interactive, we will build a **Love Calculator**, a fun throwback to the ‘90s. This tool will take two names as input and generate a random percentage score predicting compatibility.

**Understanding Randomization in JavaScript**

**Math.random() Function**

JavaScript provides the Math.random() function to generate random numbers. This function:

- Returns a **floating-point number** between **0 (inclusive) and 1 (exclusive)**.
- Produces up to **16 decimal places**.
- Never reaches 1 but can be **0.0000000...**.

**Generating a Random Dice Roll (1-6)**

To simulate a dice roll, follow these steps:

1. **Generate a random number:**

let n = Math.random();

1. **Scale the range to 0-5:**

n = n \* 6;

1. **Round down to the nearest whole number:**

n = Math.floor(n);

This gives a number between **0 and 5**.

1. **Shift the range from (0-5) to (1-6):**

n = n + 1;

Now, the result will be between **1 and 6**.

**Pseudo-Random Numbers**

Computers generate **pseudo-random numbers** using algorithms, since they operate on a deterministic system (binary 1s and 0s). If you want to learn more, check out **Khan Academy’s** video on pseudo-random number generators (linked in the Resources section).

**Building a Love Calculator**

**Challenge Instructions**

Your task is to:

1. **Ask for two names using prompts.**
2. **Generate a random love score between 1 and 100.**
3. **Display the score in an alert message.**

**Solution**

**Step 1: Getting User Input**

Even though we are not using the input values, prompts make the interaction feel authentic.

prompt("What is your name?");

prompt("What is their name?");

**Step 2: Generating the Love Score**

let loveScore = Math.random(); // Generates a random number between 0 and 0.999999...

loveScore = loveScore \* 100; // Scales it to 0 - 99.9999...

loveScore = Math.floor(loveScore) + 1; // Rounds down and shifts range to 1 - 100

**Step 3: Displaying the Result**

alert("Your love score is " + loveScore + "%");

Now, when the code runs, it:

1. Asks for two names.
2. Generates a random love percentage.
3. Displays the love score in an alert box.





<https://www.youtube.com/watch?v=GtOt7EBNEwQ>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random>

<https://www.lovecalculator.com/>