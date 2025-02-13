The `flex-direction` property in CSS is part of the Flexbox layout module. It defines the direction in which the flex items are placed in the flex container. Here's a detailed overview:

### Flex Directions
1. **row** (default): Items are placed in the same direction as text (left to right in LTR languages, right to left in RTL languages).
   ```css
   .container {
     display: flex;
     flex-direction: row;
   }
   ```

2. **row-reverse**: Items are placed in the reverse order of text direction.
   ```css
   .container {
     display: flex;
     flex-direction: row-reverse;
   }
   ```

3. **column**: Items are placed vertically, from top to bottom.
   ```css
   .container {
     display: flex;
     flex-direction: column;
   }
   ```

4. **column-reverse**: Items are placed vertically, from bottom to top.
   ```css
   .container {
     display: flex;
     flex-direction: column-reverse;
   }
   ```

### Example
Here's a practical example to demonstrate the different `flex-direction` values:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      margin: 10px 0;
      border: 1px solid #ccc;
    }
    .item {
      background-color: lightblue;
      padding: 10px;
      margin: 5px;
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <div class="container" style="flex-direction: row;">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  
  <div class="container" style="flex-direction: row-reverse;">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  
  <div class="container" style="flex-direction: column;">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  
  <div class="container" style="flex-direction: column-reverse;">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

### Explanation
- **Row**: Items are arranged horizontally from left to right.
- **Row-Reverse**: Items are arranged horizontally from right to left.
- **Column**: Items are arranged vertically from top to bottom.
- **Column-Reverse**: Items are arranged vertically from bottom to top.

