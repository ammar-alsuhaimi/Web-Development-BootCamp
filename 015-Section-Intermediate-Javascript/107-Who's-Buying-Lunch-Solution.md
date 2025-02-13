**FizzBuzz Challenge**

**Problem Statement:**

Write a program that prints numbers from 1 to 100, but:

- Print "Fizz" for multiples of 3.
- Print "Buzz" for multiples of 5.
- Print "FizzBuzz" for multiples of both 3 and 5.

**Concepts Covered:**

- Arrays (push and pop methods).
- Conditional statements (if, else if, else).
- Modulo operator (%) for divisibility checks.

**Implementation Steps:**

1. **Initialize an empty array** called output.
2. **Create a function fizzBuzz()** that:
    - Keeps track of the count using a variable (count).
    - Checks conditions:
        - If count is divisible by both 3 and 5 → push "FizzBuzz".
        - If count is divisible by 3 → push "Fizz".
        - If count is divisible by 5 → push "Buzz".
        - Otherwise, push the number itself.
    - Increments count after each function call.
    - Prints the updated array.
3. **Order of conditionals matters** (check for both 3 & 5 first to avoid skipping).
4. **Run the function multiple times** to observe correct behavior.

**Who's Paying Challenge**

**Problem Statement:**

Create a function whosPaying(names) that randomly selects a name from an array and returns the statement:  
"\[Random Name\] is going to buy lunch today!"

**Concepts Covered:**

- Array indexing.
- Random number generation (Math.random()).
- Using Math.floor() to ensure an integer index.

**Implementation Steps:**

1. **Determine array length** using names.length.
2. **Generate a random index** in the range \[0, length - 1\]:
    - Use Math.random() to get a decimal number between 0 and 1.
    - Multiply by names.length to scale the number.
    - Use Math.floor() to round down to the nearest whole number.
3. **Select a random person** from the array.
4. **Return the formatted string output** including the chosen name.

**Key Learnings:**

- Using Math.random() to select a random array element.
- Proper string formatting (concatenation with a space).
- Running the function multiple times should return different names.

Both challenges emphasize **problem-solving, array manipulation, and conditionals**, which are key web development skills. 