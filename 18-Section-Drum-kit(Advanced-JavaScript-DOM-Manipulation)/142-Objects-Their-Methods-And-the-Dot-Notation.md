```markdown
# Methods and Constructor Functions in JavaScript

Now let's talk about methods. 

## Example: Bellboy's moveSuitcase Method

Let's say our bellboy has a method called `moveSuitcase`:

- **Simplified Version**: He creates an alert saying "May I take your suitcase?", picks up the suitcase, and moves it.
- **Function**: This is a function because it's not attached to an object yet. 

### Adding a Method to an Object
To add a function as a method to an object, provide the function name as a new parameter, followed by a colon and the anonymous function:
```javascript
var bellBoy1 = {
    name: "John",
    moveSuitcase: function() {
        alert("May I take your suitcase?");
    }
};
```
- Now, `bellBoy1` has a method `moveSuitcase`.
- Call the method using `bellBoy1.moveSuitcase()`.

### Dot Notation
- Use dot notation to access properties and call methods.
- Methods are distinguished by parentheses.

### Incorporating Methods into Constructor Functions
Incorporate a method into a constructor function:
```javascript
function BellBoy(name, age) {
    this.name = name;
    this.age = age;
    this.moveSuitcase = function() {
        alert("May I take your suitcase?");
    };
}
```
- When creating objects using this constructor function, all objects will have the `moveSuitcase` method.

### Challenge: HouseKeeper's clean Method
1. Add a method to the `HouseKeeper` constructor function called `clean`.
2. The method should send an alert saying "Cleaning in progress...".
3. Create a new housekeeper object and call the `clean` method.

#### Solution
1. Create the `clean` method:
```javascript
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress...");
    };
}
```
2. Create a new housekeeper and call the method:
```javascript
var houseKeeper1 = new HouseKeeper(12, "James", ["bedroom"]);
houseKeeper1.clean();
```
- This creates an alert saying "Cleaning in progress...".

## Similarity to Creating and Using Audio Objects
The structure is similar to creating and using audio objects:
```javascript
var tom1 = new Audio('sounds/tom-1.mp3');
tom1.play();
```
- **Constructor Function**: Though unseen, the constructor function for `Audio` objects would look something like this:
```javascript
function Audio(fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        // Function to play audio
    };
}
```
- Create and use the object:
```javascript
var tom1 = new Audio('sounds/tom-1.mp3');
tom1.play();
```

## Conclusion
- Use properties and methods associated with objects in JavaScript.
- Create custom objects for specific behaviors.
- Repetition and practice will make these concepts more familiar over time.
- Keep revisiting these lessons to solidify your understanding.

Happy coding!
```

