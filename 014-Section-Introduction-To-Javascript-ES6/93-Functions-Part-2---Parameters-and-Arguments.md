**Key Concepts:**

1. **Basic Function (Vanilla)**:  you learned the simplest form of a function, where no input was required.
2. **Function with Parameters (Chocolate)**: Functions can now take parameters (inputs). These parameters can be used within the function’s body to customize the function’s behavior.
    - Example: A getMilk() function that accepts the number of bottles as a parameter. It can then use that parameter to calculate the cost or perform other actions inside the function.
3. **How it Works**:
    - When you define a function with a parameter, it’s like creating a placeholder that will be filled with a value when the function is called.
    - For example, if you call getMilk(2), the value 2 is passed into the function, which can then be used to calculate the total cost of milk, and so on.

**The Challenge: Calculating the Number of Bottles Based on Money**

You were tasked with modifying the function to take **money** as the input and calculate how many bottles of milk the robot can buy. Here's a breakdown of the steps:

1. **Modifying the function to accept money**:
    - The function will no longer take the number of bottles as input. Instead, it will accept **money**.
    - Inside the function, you’ll calculate how many bottles can be bought by dividing the amount of money by the cost per bottle (e.g., $1.5 per bottle).
2. **Handling fractional bottles**:
    - Since you can't buy a fraction of a bottle, you'll need to round down the result to the nearest whole number. You can use JavaScript's Math.floor() method for this.

**Solution:**

Here’s how you could modify the function to achieve this:

function getMilk(money) {

var costPerBottle = 1.5; // The cost of one bottle of milk

var numberOfBottles = Math.floor(money / costPerBottle); // Calculate how many bottles can be bought, rounded down

console.log("Buy " + numberOfBottles + " bottles of milk.");

}

// Test the function

getMilk(5); // Output: "Buy 3 bottles of milk."

**Key Points:**

- **Parameters** allow us to customize the behavior of a function each time we call it.
- **Math.floor()** is used to round down the result to ensure we don’t buy fractional bottles.
- **Debugging with Google**: As you can see, when you encounter a problem like rounding, a quick Google search can often provide the solution (in this case, Math.floor()).




<https://www.w3schools.com/jsref/jsref_floor.asp>