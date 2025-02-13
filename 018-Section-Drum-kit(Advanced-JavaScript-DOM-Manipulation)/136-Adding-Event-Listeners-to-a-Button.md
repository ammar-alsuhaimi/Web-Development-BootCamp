```markdown
# Adding Event Listeners to Buttons

 Now, we'll focus on making our buttons interactive by adding event listeners.

## Linking JavaScript to HTML

Ensure that your `index.html` includes the following script tag just before the closing `</body>` tag:

```html
<script src="index.js"></script>
```

This links your JavaScript file to your HTML, allowing you to add interactivity to your webpage.

## Adding an Event Listener to a Button

To make a button respond to user clicks, we need to add an event listener. Here's how you can do it:

1. **Define a Function to Handle Clicks**

   In your `index.js`, create a function that will execute when the button is clicked:

   ```javascript
   function handleClick() {
       alert("I got clicked!");
   }
   ```

2. **Select the Button and Add the Event Listener**

   Use `document.querySelector` to select the first button and add an event listener for the 'click' event:

   ```javascript
   document.querySelector("button").addEventListener("click", handleClick);
   ```

   This code selects the first `<button>` element in the document and attaches an event listener that calls the `handleClick` function when the button is clicked.

## Adding Event Listeners to Multiple Buttons

If you have multiple buttons and want each to respond to clicks, you can add event listeners to all of them using a loop:

1. **Select All Buttons**

   Use `document.querySelectorAll` to select all elements with the class `drum`:

   ```javascript
   var numberOfDrumButtons = document.querySelectorAll(".drum").length;
   ```

2. **Loop Through the Buttons and Add Event Listeners**

   Use a `for` loop to iterate through the buttons and add an event listener to each:

   ```javascript
   for (var i = 0; i < numberOfDrumButtons; i++) {
       document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
   }
   ```

   This loop goes through each button with the class `drum` and attaches the `handleClick` function to the 'click' event.

## Understanding Function References in Event Listeners

When adding an event listener, it's important to pass the function reference without parentheses:

```javascript
document.querySelector("button").addEventListener("click", handleClick);
```

If you include parentheses (`handleClick()`), the function will execute immediately when the code runs, rather than waiting for the click event.

Alternatively, you can use an anonymous function directly in the event listener:

```javascript
document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
});
```

This approach defines the function inline without giving it a name.

## Challenge

Modify your code to add event listeners to all buttons with the class `drum`, so that clicking any button triggers the `handleClick` function. Aim to accomplish this in no more than five lines of code.

**Hint:** Use a loop to iterate through the buttons and add the event listener to each.

Once you've completed this, your buttons will be interactive, and you'll be ready to move on to playing sounds in response to user actions.

For more details on the `addEventListener` method, refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

``` 