Got it! I'll organize this into a Markdown file as well.

```markdown
# JavaScript String Manipulation

## Changing String Case
The last thing that I want to show you that you can do with strings is using a method called `toUpperCase()` which changes all of the characters in your string to uppercase. As we have done before, we simply take the variable, write a dot, and then use `toUpperCase` to turn every single character in the string to its uppercase version.

### Example
Here's how you can use `toUpperCase()` in practice:

```javascript
let name = "Angela";
console.log(name.toUpperCase()); // Output: "ANGELA"
```

If you want to save this change to the variable, you can reassign it:

```javascript
name = name.toUpperCase();
console.log(name); // Output: "ANGELA"
```

You can also convert the string back to lowercase using `toLowerCase()`:

```javascript
name = name.toLowerCase();
console.log(name); // Output: "angela"
```

## Practical Use Case
Sometimes, you might want to ask the user for a prompt and ask them for, "What is your name?". They might give you their name in all lowercase, which doesn't look very good when printed out in an alert. To make it consistent, you can capitalize the first letter and make the rest of the characters lowercase.

## Challenge
Use everything that you've learned, including how to slice strings, concatenate strings, and change the casing, to complete the next challenge.

### Challenge Description
Create a prompt that asks the user for their name. If they give you a name that is uppercase or lowercase, send them an alert that says "Hello," and then their name, with only the first character capitalized.

### Solution Steps
1. Ask the user for their name using a prompt.
2. Extract the first character and convert it to uppercase.
3. Extract the rest of the characters and convert them to lowercase.
4. Concatenate the first character with the rest of the characters.
5. Display the result in an alert.

### Example Solution
Here's how you can achieve this:

```javascript
// Prompt the user to enter their name
let userName = prompt("What is your name?");

// Capitalize the first character and lowercase the rest
let formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

// Display the formatted name in an alert
alert("Hello, " + formattedName);
```

## Conclusion
If you've been following along with the previous lessons, you should now be able to use everything you've learned to complete this challenge. In the next lesson, we'll talk about another feature of JavaScript strings, the `slice` function, which will enable us to slice and dice our strings. See you in the next lesson!
```