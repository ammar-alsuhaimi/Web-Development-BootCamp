**Steps to Approach the Problem:**

1. **Understand the Formula**:
    - BMI is calculated by dividing **weight** (in kilograms) by **height squared** (in meters).
    - Formula: BMI=weightheight2BMI = \\frac{\\text{weight}}{\\text{height}^2}
2. **Function Requirements**:
    - You need to create a function named bmiCalculator.
    - It should take two parameters:
        - **weight** (in kilograms).
        - **height** (in meters).
    - The function should return the calculated BMI.
3. **Implementation**:
    - Make sure to perform the **height squared** operation before dividing by the weight.
    - Return the resulting BMI value.

**Example Solution:**

Here’s a quick outline of how the function could look:

function bmiCalculator(weight, height) {

let bmi = weight / (height \* height); // height squared

return bmi;

}

// Test the function

let bmi = bmiCalculator(70, 1.75); // Example input

console.log(bmi); // This should log the BMI

**Breakdown:**

- The function bmiCalculator takes **weight** and **height** as inputs.
- It calculates the BMI by dividing the weight by the square of the height (height \* height).
- The result is returned and logged to the console.
