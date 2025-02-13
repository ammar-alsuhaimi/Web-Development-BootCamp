Sure! Here's the organized content in Markdown format:

```markdown
# Using Switch Statements for Key Presses

Now that we know which key was pressed and how to get its `innerHTML`, let's learn how to play a different sound depending on which key was pressed.

### Using `if-else` Statements
You might think to use `if-else` statements, but with seven keys in total, we would have to write quite a few `if-else` statements.

### Introducing Switch Statements
In this scenario, it would be easier to write a "switch statement" which, like a railroad switch, takes the code down a different track depending on the value of a variable.

#### Writing a Switch Statement
1. **Delete** the existing line of code and start writing the switch statement.
2. **Auto-suggest**: Inside Atom, start writing the word `switch`, and autosuggest will give you the skeleton of a JavaScript switch statement.
3. **Structure**:
   - Keyword: `switch`
   - Parentheses: `(expression)` which includes the value to switch on.
   - In our case, we switch on the letter inside the `innerHTML` of each button.

#### Example:
```javascript
var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

    // Add cases for s, d, j, k, l
    case "s":
        // corresponding sound
        break;
    case "d":
        // corresponding sound
        break;
    case "j":
        // corresponding sound
        break;
    case "k":
        // corresponding sound
        break;
    case "l":
        // corresponding sound
        break;

    default:
        console.log(buttonInnerHTML);
}
```

### Explanation:
1. **Case `w`**: If `buttonInnerHTML` is `w`, play `tom-1.mp3`.
2. **Break Statement**: Tells the code to exit the switch statement after executing the case block.
3. **Other Cases**: Add cases for `a, s, d, j, k, l` to play corresponding sounds.
4. **Default Case**: Like the `else` statement, covers all unspecified scenarios, logs the `buttonInnerHTML` that triggered the default case.

### Testing
- Save and refresh your website.
- Click on any buttons to see different sounds for each button click.
- In the next lesson, we'll explore using keyboard events to trigger sounds instead of pressing buttons.

That’s pretty cool, right? So, let's get started in the next lesson!
```
