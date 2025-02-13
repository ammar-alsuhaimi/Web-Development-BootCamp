**Key Points from the Lesson:**

1. **Basic Arithmetic Operations**:
    - \+ for addition.
    - \- for subtraction.
    - \* for multiplication.
    - / for division.
    - % for modulo (remainder of division).
2. **Modulo Operator**:
    - This is useful for checking if a number is odd or even.
    - Example: 45 % 2 would return 1 (odd), and 46 % 2 would return 0 (even).
3. **Operator Precedence**:
    - Multiplication and division happen before addition and subtraction. This is similar to the rules in regular math.
    - Example: 3 + 5 \* 2 equals 13, not 16, because multiplication is performed before addition.
    - Parentheses can be used to clarify and control the order of operations.
4. **Challenge**: Dog Age to Human Age Converter
    - The task is to convert a dog's age into human years using the formula:
        - Subtract 2 from the dog's age.
        - Multiply by 4.
        - Add 21.

**Code Solution for the Dog Age Converter:**

// Step 1: Prompt user for dog's age

var dogAge = prompt("How old is your dog?");

// Step 2: Apply the formula with appropriate parentheses to ensure correct precedence

var humanAge = (dogAge - 2) \* 4 + 21;

// Step 3: Output the result

alert("Your dog is " + humanAge + " years old in human years.");

**Explanation of the Code:**

1. **Prompt**: The prompt() method is used to get the dog's age from the user.
2. **Formula Calculation**: We subtract 2 from the dog's age, multiply the result by 4, and then add 21. The parentheses ensure the proper order of operations.
3. **Alert**: The result is displayed using an alert() message.

**Example Output:**

- If the user inputs 7 for the dog's age, the output would be:
  - "Your dog is 41 years old in human years."

