**What is a Function?**

A **function** is a reusable block of code designed to perform a particular task. Once you define a function, you can call it anytime to execute the task, rather than writing out the same series of instructions repeatedly.

**Function Structure:**

1. **function keyword**: This tells JavaScript that you're defining a function.
2. **Function name**: You give the function a name to identify it.
3. **Parentheses ()**: These define the function’s parameters, which we'll explore later.
4. **Curly braces {}**: The instructions or tasks the function will execute go inside the curly braces.

**Example: Function to Get Milk**

Here's the basic structure of a function called getMilk that contains a series of instructions (like going to the store, buying milk, and coming back):

function getMilk() {

alert("Leave the house");

alert("Move right 2 steps");

alert("Move up 4 steps");

alert("Move right 2 steps");

alert("Buy milk");

alert("Move right 2 steps");

alert("Move up 4 steps");

alert("Move right 2 steps");

alert("You're home with the milk");

}

**Calling the Function:**

Once you've defined the function, you can **call** it by simply using its name followed by parentheses:

getMilk();

When you call getMilk(), it executes all the instructions inside the function, one by one.

**Key Concepts:**

1. **Avoiding Repetition**: Functions help avoid writing the same code multiple times. If you need the robot to go to the store every day, you simply call getMilk() instead of repeating all the instructions.
2. **Indentation**: It's good practice to indent the code inside functions to improve readability. This makes it easier to understand the structure at a glance.
3. **Using console.log() for Debugging**: Instead of using alert() to show the instructions, you can use console.log() for debugging purposes. console.log() displays the information in the console, which is helpful for developers without interrupting the user experience.

console.log("Leave the house");

console.log("Move right 2 steps");

console.log("Move up 4 steps");

**Final Example with console.log():**

After replacing alert with console.log, your function looks like this:

function getMilk() {

console.log("Leave the house");

console.log("Move right 2 steps");

console.log("Move up 4 steps");

console.log("Move right 2 steps");

console.log("Buy milk");

console.log("Move right 2 steps");

console.log("Move up 4 steps");

console.log("Move right 2 steps");

console.log("You're home with the milk");

}

getMilk();

When you run this code, instead of receiving pop-up alerts, you'll see the instructions logged in the browser console. This is especially helpful during development.

**Summary:**

- Functions allow you to group related code into reusable blocks.
- Once defined, a function can be called as many times as needed, saving you from repeating code.
- Use console.log() for easier debugging during development.

