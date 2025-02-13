### Introduction to Variables
Variables in JavaScript are used to store data values. They act as containers for data that can be accessed and manipulated throughout your code. Variables are declared using the `var`, `let`, or `const` keywords.

### Variable Declarations
1. **`var`**:
   - Has function scope.
   - Can be redeclared and updated.

   ```javascript
   var x = 10;
   var x = 20; // Redeclaration is allowed
   x = 30; // Update is allowed
   ```

2. **`let`**:
   - Has block scope.
   - Cannot be redeclared in the same scope.
   - Can be updated.

   ```javascript
   let y = 10;
   y = 20; // Update is allowed
   let y = 30; // Redeclaration in the same scope is not allowed
   ```

3. **`const`**:
   - Has block scope.
   - Cannot be redeclared or updated.
   - Must be initialized at the time of declaration.

   ```javascript
   const z = 10;
   z = 20; // Update is not allowed
   const z = 30; // Redeclaration in the same scope is not allowed
   ```

### Variable Scope
1. **Global Scope**:
   - Variables declared outside any function have global scope.
   - Accessible from anywhere in the code.

   ```javascript
   var globalVar = "I am global";

   function myFunction() {
     console.log(globalVar); // Accessible
   }
   ```

2. **Function Scope**:
   - Variables declared within a function have function scope.
   - Accessible only within that function.

   ```javascript
   function myFunction() {
     var functionVar = "I am local";
     console.log(functionVar); // Accessible
   }
   console.log(functionVar); // Not accessible
   ```

3. **Block Scope**:
   - Variables declared with `let` or `const` within a block (e.g., inside `{}`) have block scope.
   - Accessible only within that block.

   ```javascript
   {
     let blockVar = "I am block scoped";
     console.log(blockVar); // Accessible
   }
   console.log(blockVar); // Not accessible
   ```

### Variable Hoisting
- **Hoisting**:
  - Variables declared with `var` are hoisted to the top of their scope and can be used before they are declared (initially `undefined`).
  - `let` and `const` are also hoisted but not initialized, so accessing them before declaration causes a `ReferenceError`.

  ```javascript
  console.log(a); // undefined (hoisted)
  var a = 10;

  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  ```

### Best Practices
- Use `let` and `const` instead of `var` to avoid issues with function and block scope.
- Use `const` for variables that should not be reassigned, and `let` for variables that need to change.
- Avoid global variables to prevent potential conflicts and unintended behavior.

### Example
Here's a practical example to illustrate variable declarations and scope:

```javascript
// Global Scope
var globalVar = "I'm a global variable";

function exampleFunction() {
  // Function Scope
  var functionVar = "I'm a function-scoped variable";
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible

  if (true) {
    // Block Scope
    let blockVar = "I'm a block-scoped variable";
    const blockConst = "I'm a block-scoped constant";
    console.log(blockVar); // Accessible
    console.log(blockConst); // Accessible
  }

  console.log(blockVar); // Not accessible (ReferenceError)
  console.log(blockConst); // Not accessible (ReferenceError)
}

exampleFunction();
console.log(globalVar); // Accessible
console.log(functionVar); // Not accessible (ReferenceError)
```

### Summary
- Variables in JavaScript can be declared using `var`, `let`, or `const`.
- `var` has function scope, while `let` and `const` have block scope.
- Use `let` and `const` to prevent issues with hoisting and reassignment.
- Follow best practices to write clean and maintainable code.

