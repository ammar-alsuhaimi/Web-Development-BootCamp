**Key Concepts:**

1. **Return Statement**:
    - A function that has a **return** statement not only takes inputs but also gives an output. This output can be used outside the function in other parts of the code.
    - Example:
    - function getMilk(money) {
    - return money % 1.5;
    - }
2. **Modulo Operation (%)**:
    - The modulo operator returns the **remainder** of a division. For example, 4 % 1.5 equals 1, which represents the change you get after buying bottles of milk.
3. **Function Composition**:
    - Functions can call other functions. For instance, you could create a calcBottles() function to calculate the number of bottles you can buy, and then use that function in getMilk() to determine the number of bottles and the remainder.
4. **Input and Output**:
    - Functions that take inputs can perform calculations using those inputs, and the results can be returned for further use.
    - Example:
    - function calcBottles(startingMoney, costPerBottle) {
    - return Math.floor(startingMoney / costPerBottle);
    - }
    - function calcChange(startingAmount, costPerBottle) {
    - return startingAmount % costPerBottle;
    - }
        - The calcBottles() function calculates how many bottles can be bought, and calcChange() calculates the change left over.
5. **Reusable Functions**:
    - Using **return values** allows you to create modular and reusable functions, making it easier to modify your code (like changing the price of milk) without modifying multiple parts of the code.
6. **Dry Principle**:
    - The lesson emphasizes the importance of making code **DRY** (Don’t Repeat Yourself). Instead of repeating calculations for change and bottle prices, you can use functions to handle these tasks, making the code more efficient and maintainable.

**Practical Example:**

Here’s an example where you have two functions calcBottles() and calcChange() to calculate the number of bottles and the remaining change.

function getMilk(money, costPerBottle) {

let bottles = calcBottles(money, costPerBottle); // Number of bottles

let change = calcChange(money, costPerBottle); // Remaining change

console.log("You can buy " + bottles + " bottles of milk.");

console.log("Your change is $" + change);

}

function calcBottles(startingMoney, costPerBottle) {

return Math.floor(startingMoney / costPerBottle); // Calculates how many bottles can be bought

}

function calcChange(startingAmount, costPerBottle) {

return startingAmount % costPerBottle; // Calculates remaining change

}

// Test with $5 and bottle price of $1.5

getMilk(5, 1.5); // Output: You can buy 3 bottles of milk. Your change is $0.5

**Benefits:**

- **Modularity**: Functions are independent and can be reused in different parts of your code.
- **Maintainability**: When you need to change the behavior (like changing the price of milk), you only have to modify the related function.
- **Flexibility**: Functions with return statements allow you to chain them or use their outputs in other computations, increasing your code's flexibility.

