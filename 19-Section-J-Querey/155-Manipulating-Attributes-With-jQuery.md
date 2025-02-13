```markdown
# Manipulating Attributes with jQuery

In the last lesson, we looked at how we can use jQuery to manipulate text on our web page. In this lesson, we'll explore how we can use jQuery to manipulate attributes.

## Understanding Attributes

Attributes are properties such as:
- **Image (`img`)**: `src="drum.png"`
- **Anchor (`a`)**: `href="https://www.google.com"`

## Using the `.attr()` Method

### Getting Attribute Values
To get the value of an attribute:
```javascript
console.log($("img").attr("src"));
```
- **Example**: If the image source (`src`) is `drum.png`, it will print `"drum.png"` to the console.

### Setting Attribute Values
To set the value of an attribute:
```javascript
$("a").attr("href", "https://www.yahoo.com");
```
- **Example**: Changes the `href` attribute of all anchor tags to `https://www.yahoo.com`.

### Example: Changing Anchor Tag
Let's direct people to Yahoo instead of Google:
```javascript
$("a").attr("href", "https://www.yahoo.com").text("Search");
```
- **Result**: Changes the `href` attribute of all anchor tags to `https://www.yahoo.com` and updates the text to "Search".

### Checking Class Attribute
Remember that a class is also an HTML attribute. To get the class attribute:
1. **Add Classes**:
    ```html
    <h1 class="big-title margin-50">Hello</h1>
    ```
2. **Get Class Attribute Using jQuery**:
    ```javascript
    console.log($("h1").attr("class"));
    ```
    - **Result**: Prints out all the classes currently applied to the `h1` (e.g., `"big-title margin-50"`).

## Conclusion

In this lesson, we learned how to use jQuery to manipulate attributes using the `.attr()` method. This allows you to dynamically get and set attribute values, making your web development process more flexible and efficient.

In the next lesson, we'll look at how we can add event listeners using jQuery. Stay tuned for more!

Happy coding!
```
