
The HTML `<img>` element is used to embed images into a web page. Images can enhance the visual appeal and provide more context to the content on your site. 

Here's how you can use the `<img>` element:

### Syntax
The basic syntax of the `<img>` element is:
```html
<img src="URL" alt="Description of image">
```
The `<img>` element is a self-closing tag, meaning it doesn't have a closing tag.

### Attributes
- **`src`**: Specifies the path to the image file. This can be a relative or absolute URL.
- **`alt`**: Provides alternative text for the image if it cannot be displayed. This is important for accessibility and for search engines.
- **`width` and `height`**: Define the dimensions of the image (in pixels).
- **`title`**: Provides additional information about the image, often displayed as a tooltip when the user hovers over the image.

### Example
#### Basic Image
```html
<img src="image.jpg" alt="A description of the image">
```
This embeds an image located at "image.jpg" with an alternative text description.

#### Image with Dimensions
```html
<img src="image.jpg" alt="A description of the image" width="300" height="200">
```
This embeds an image with a width of 300 pixels and a height of 200 pixels.

#### Image with Tooltip
```html
<img src="image.jpg" alt="A description of the image" title="This is a tooltip">
```
This embeds an image and provides a tooltip that appears when the user hovers over the image.

### Using Relative and Absolute URLs
- **Relative URL**: Refers to a file within the same directory or website.
  ```html
  <img src="images/photo.jpg" alt="A photo from the images folder">
  ```
- **Absolute URL**: Refers to a file located on the web.
  ```html
  <img src="https://example.com/images/photo.jpg" alt="A photo from an external site">
  ```

### Accessibility
The `alt` attribute is essential for accessibility. It provides a text alternative for screen readers, helping visually impaired users understand the content of the image.

### Example: Embedding an Image
```html
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>Here is an image of a beautiful scenery:</p>
    <img src="scenery.jpg" alt="A beautiful scenery with mountains and a lake" width="600" height="400">
</body>
</html>
```


