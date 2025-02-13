Adding CSS (Cascading Style Sheets) to your HTML can greatly enhance the appearance and layout of your web pages. 

Here are three main ways to add CSS to your HTML documents:

### 1. Inline CSS
You can apply CSS styles directly within an HTML element using the `style` attribute.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">Hello, World!</h1>
    <p style="font-size: 20px; font-family: Arial;">This is a paragraph with inline CSS.</p>
</body>
</html>
```

### 2. Internal CSS
You can define CSS styles within the `<style>` tag in the `<head>` section of your HTML document.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>
    <style>
        body {
            background-color: #f0f0f0;
        }
        h1 {
            color: green;
            text-align: center;
        }
        p {
            font-size: 20px;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph with internal CSS.</p>
</body>
</html>
```

### 3. External CSS
You can create a separate CSS file and link it to your HTML document using the `<link>` tag in the `<head>` section. This is the preferred method for larger projects as it keeps the CSS separate from the HTML.

**Step-by-Step Example:**

1. **Create an HTML file (`index.html`):**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>External CSS Example</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a paragraph with external CSS.</p>
    </body>
    </html>
    ```

2. **Create a CSS file (`styles.css`):**
    ```css
    body {
        background-color: #f0f0f0;
    }
    h1 {
        color: red;
        text-align: center;
    }
    p {
        font-size: 20px;
        font-family: Arial, sans-serif;
    }
    ```

### Key Points:
- **Inline CSS**: Apply styles directly within HTML elements using the `style` attribute.
- **Internal CSS**: Define styles within a `<style>` tag in the `<head>` section.
- **External CSS**: Link a separate CSS file using the `<link>` tag in the `<head>` section, which is ideal for larger projects.

By using CSS, you can control the look and feel of your web pages, making them more visually appealing and user-friendly. 
