```markdown
# Detecting Keyboard Key Presses to Activate Drums

Now, if we want our website to detect both button presses and keyboard key presses to activate the relevant drum, here's how we can do it.

## Adding Event Listeners for Keypress
Instead of adding an event listener for clicks, we can listen for a `keypress` event.
```javascript
document.addEventListener("keypress", function() {
    alert("Key was pressed");
});
```
Note: Events are named in lowercase, so refer to the documentation when typing them.

## Adding Event Listener to the Document
To detect keyboard key presses, add an event listener to the entire document.
```javascript
document.addEventListener("keypress", function() {
    alert("Key was pressed");
});
```
Save and refresh your page, and tap any keys on your keyboard to see the alert.

## Determining Which Key Was Pressed
To figure out which key was pressed, use the `event` parameter to access the event that triggered the listener.
```javascript
document.addEventListener("keypress", function(event) {
    console.log(event);
});
```
Inspect the logged event in the console to see the key that was pressed and other details.

## Using the `key` Property
The key property of the event object tells us which key was pressed. This helps determine which sound to play.
```javascript
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});
```

## Challenge: Create a Function to Play Sounds
Create a function that takes a character and checks it against a switch statement to play the correct sound. Call it inside the event listener for both keypress and button clicks.

### Solution
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

## Conclusion
In this lesson, we learned how to add event listeners to detect keyboard strokes and use the `key` property of the event object to determine which key was pressed. We created a function to play the relevant sound based on the key pressed and called it inside event listeners for both button clicks and keypress events.
```

