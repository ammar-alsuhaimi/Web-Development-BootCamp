```markdown
# Manipulating Styles with jQuery

Previously, we briefly saw that we can manipulate the CSS style of a selected element by simply using the `.css` method from jQuery.

## Changing CSS Properties

### Example: Change Color
To change the color of an `h1` to green:
```javascript
$("h1").css("color", "green");
```
- **Result**: The `h1` element's color property changes to green.

### Getting the Current Value
You can get the current value of a CSS property by specifying the property name as a string:
```javascript
console.log($("h1").css("color"));
```
- **Result**: Logs the RGB value of the `h1` element's color.

### Example: Get Font Size
To get the current font size of an `h1`:
```javascript
console.log($("h1").css("font-size"));
```
- **Result**: Logs the font size of the `h1` element.

## Setting vs. Getting CSS Properties
- **Setting**: Two parameters (`property`, `value`) to set a CSS property.
- **Getting**: One parameter (`property`) to get the current value of a CSS property.

## Separating Concerns

### Using Classes
Instead of changing styles directly in JavaScript, you can add a class to the element:
1. **Define a Class in CSS**:
    ```css
    .big-title {
        font-size: 10rem;
        color: yellow;
        font-family: cursive;
    }
    ```
2. **Add the Class Using jQuery**:
    ```javascript
    $("h1").addClass("big-title");
    ```
- **Result**: Adds the `big-title` class to the `h1` element, applying all the styles defined in the class.

### Removing Classes
You can also remove a class:
```javascript
$("h1").removeClass("big-title");
```
- **Result**: Removes the `big-title` class from the `h1` element.

### Adding Multiple Classes
To add multiple classes:
1. **Define Another Class in CSS**:
    ```css
    .margin-50 {
        margin: 50px;
    }
    ```
2. **Add Multiple Classes Using jQuery**:
    ```javascript
    $("h1").addClass("big-title margin-50");
    ```
- **Result**: Adds both the `big-title` and `margin-50` classes to the `h1` element.

### Checking for a Class
To check if an element has a particular class:
```javascript
console.log($("h1").hasClass("margin-50"));
```
- **Result**: Logs `true` or `false` depending on whether the `h1` element has the `margin-50` class.

## Conclusion
In this lesson, we learned how to manipulate styles using jQuery methods such as `.css`, `.addClass`, `.removeClass`, and `.hasClass`. By separating behavior from styles, we keep our code clean and maintainable. In the next lesson, we'll look at how we can use jQuery to manipulate not just styles but also text.

Stay tuned for more!
```

