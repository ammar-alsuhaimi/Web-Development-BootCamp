### CSS Display Property

1. **Block Level Elements**
   - Takes up the full width available.
   - Begins on a new line.
   - Examples: `<div>`, `<p>`, `<h1>`, etc.

   ```css
   .block {
     display: block;
   }
   ```

2. **Inline Elements**
   - Takes up only as much width as necessary.
   - Does not begin on a new line.
   - Examples: `<span>`, `<a>`, `<strong>`, etc.

   ```css
   .inline {
     display: inline;
   }
   ```

3. **Inline-Block Elements**
   - Behaves like an inline element but can have a width and height.
   - Does not start on a new line.

   ```css
   .inline-block {
     display: inline-block;
   }
   ```

4. **None**
   - The element is not displayed at all (it will be invisible and will not take up space).

   ```css
   .none {
     display: none;
   }
   ```

5. **Flex**
   - Converts an element into a flexible container.
   - Child elements (flex items) can be arranged in various ways.

   ```css
   .flex {
     display: flex;
   }
   ```

6. **Grid**
   - Converts an element into a grid container.
   - Child elements (grid items) can be arranged into rows and columns.

   ```css
   .grid {
     display: grid;
   }
   ```

7. **Inline-Flex**
   - Similar to `flex`, but the container behaves like an inline element.

   ```css
   .inline-flex {
     display: inline-flex;
   }
   ```

8. **Inline-Grid**
   - Similar to `grid`, but the container behaves like an inline element.

   ```css
   .inline-grid {
     display: inline-grid;
   }
   ```

9. **Table**
   - Behaves like a table element (`<table>`).

   ```css
   .table {
     display: table;
   }
   ```

10. **Table-Row**
    - Behaves like a table row element (`<tr>`).

    ```css
    .table-row {
      display: table-row;
    }
    ```

11. **Table-Cell**
    - Behaves like a table cell element (`<td>`).

    ```css
    .table-cell {
      display: table-cell;
    }
    ```

12. **List-Item**
    - Behaves like a list item element (`<li>`).

    ```css
    .list-item {
      display: list-item;
    }
    ```

### Example of Display Properties

Here's a practical example to illustrate how these display properties work:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .block { display: block; background-color: lightblue; padding: 10px; }
    .inline { display: inline; background-color: lightgreen; padding: 10px; }
    .inline-block { display: inline-block; background-color: lightcoral; padding: 10px; }
    .flex { display: flex; background-color: lightgoldenrodyellow; padding: 10px; }
    .grid { display: grid; background-color: lightpink; padding: 10px; }
    .none { display: none; }
  </style>
</head>
<body>
  <div class="block">Block Element</div>
  <span class="inline">Inline Element</span>
  <div class="inline-block">Inline-Block Element</div>
  <div class="flex">
    <div>Flex Item 1</div>
    <div>Flex Item 2</div>
  </div>
  <div class="grid">
    <div>Grid Item 1</div>
    <div>Grid Item 2</div>
  </div>
</body>
</html>
```

