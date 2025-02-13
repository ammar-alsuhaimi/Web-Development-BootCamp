```markdown
# Higher Order Functions and Callbacks in JavaScript

## Introduction to Higher Order Functions
Higher Order Functions are functions that can take other functions as inputs. An example is `addEventListener`, which takes a callback function as an input.

### Example: `addEventListener` as a Higher Order Function
```javascript
document.addEventListener("keypress", respondToKey);
```
- **Higher Order Function**: `addEventListener` takes `respondToKey` as an input.

## Callback Functions
A Callback Function is a function passed into another function as an argument. It gets called back and executed after some event occurs (e.g., a click event).

### Example: Callback Function in `addEventListener`
```javascript
document.addEventListener("keypress", function() {
    alert("Key was pressed");
});
```

## Listening for Keypress Events
We can add an event listener to the entire document to listen for keypress events.
```javascript
document.addEventListener("keypress", function() {
    alert("Key was pressed");
});
```
- Add the event listener to the entire document to listen for keyboard strokes.

## Accessing the Event Object
To determine which key was pressed, we can access the event object that triggered the listener.
```javascript
document.addEventListener("keypress", function(event) {
    console.log(event);
});
```
- The event object provides details such as the key pressed, key code, character code, etc.

### Example: Logging the Event Object
```javascript
document.addEventListener("keypress", function(event) {
    console.log(event.key);
});
```
- The `key` property of the event object tells us which key was pressed.

## Creating a Function to Handle Keypress Events
Create a function that takes a character and checks it against a switch statement to play the correct sound.

### Solution: `makeSound` Function
1. Create the `makeSound` function:
    ```javascript
    function makeSound(key) {
        switch (key) {
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
                console.log(key);
        }
    }
    ```
2. Call `makeSound` inside event listeners for button clicks and keypress:
    ```javascript
    // Event listener for button clicks
    document.querySelectorAll(".drum").forEach(button => {
        button.addEventListener("click", function() {
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
        });
    });

    // Event listener for keypress
    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
    });
    ```

## Callback Function Details
When the callback function is called, it receives an event object that contains information about the event.

### Example: Event Object in Callback Function
```javascript
document.addEventListener("click", function(event) {
    console.log(event);
});
```
- The event object includes properties like the event type, key pressed, and other details.

### Naming Event Parameters
You can name the event parameter anything you want (e.g., `e`, `evt`).

### Creating an Event Listener Function
Let's create a simplified version of `addEventListener` to understand callbacks better:
```javascript
function anotherAddEventListener(typeOfEvent, callback) {
    // Simulate event detection
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        duration: 2
    };

    // Trigger the callback if the event type matches
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

// Use the custom event listener
anotherAddEventListener("keypress", function(event) {
    console.log(event);
});
```
- This custom function simulates event detection and triggers the callback if the event type matches.

## Conclusion
Callbacks can be confusing, but they are essential for handling events in JavaScript. Recreate the `addEventListener` function and use the debugger to step through the code to understand how callbacks work. We'll revisit this topic in future lessons.

Happy coding!
```

