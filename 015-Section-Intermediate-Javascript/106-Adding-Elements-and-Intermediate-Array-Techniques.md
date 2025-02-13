**FizzBuzz Interview Question & Learning About Arrays**

**1\. Introduction to FizzBuzz**

- FizzBuzz is a common coding interview question used to assess problem-solving skills.
- The task: Print numbers from **1 to 100**, but:
  - Replace multiples of **3** with "Fizz".
  - Replace multiples of **5** with "Buzz".
  - Replace multiples of **both 3 and 5** with "FizzBuzz".

**2\. Why Is FizzBuzz Important?**

- Many applicants fail basic coding tests, despite having a CS degree.
- The problem tests fundamental coding skills, logic, and understanding of loops and conditionals.

**Building the Solution with Arrays**

**3\. Understanding Arrays and Push/Pop**

- Arrays store a sequence of values.
- .push(value) adds a value to the **end** of an array.
- .pop() removes the **last** value from an array.

**4\. Creating a Function to Automate the Process**

- Instead of manually adding numbers to the array, we write a function.
- **Steps to Implement:**
    1. Create an empty array output = \[\].
    2. Define a variable count = 1 to track numbers.
    3. Write a function fizzBuzz():
        - Push count into the array.
        - Increment count by 1 each time the function is called.
        - Print the updated array.

**5\. Handling Fizz, Buzz, and FizzBuzz Using Conditionals**

- Use the **modulo operator (%)** to check divisibility:
  - if count % 3 === 0 → Push "Fizz".
  - if count % 5 === 0 → Push "Buzz".
  - if count % 3 === 0 && count % 5 === 0 → Push "FizzBuzz".
  - Else, push the number itself.

**6\. Importance of Order in Conditionals**

- The order of if-else statements matters:
  - **Check for FizzBuzz first** (both conditions met).
  - Then check for Fizz and Buzz separately.
  - Finally, push the number.

**7\. Automating Further**

- Instead of calling fizzBuzz() manually, we can loop from **1 to 100**.
- Example: Use a for loop to execute fizzBuzz() automatically.

**8\. Key Takeaways**

- **Arrays and loops** help automate repetitive tasks.
- **Conditionals** determine logic flow.
- **Thinking like a programmer** means automating tedious tasks.
- There's a famous story about a Russian programmer automating his entire job—highlighting the power of coding efficiency.



<https://blog.codinghorror.com/why-cant-programmers-program/>

<https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/>