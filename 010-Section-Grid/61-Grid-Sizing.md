Grid sizing in CSS Grid Layout is an essential concept that allows you to define the size of grid tracks 
(rows and columns) and control the layout of grid items. 

### 1. **Basic Grid Definitions**
   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
     grid-template-rows: auto 100px; /* Two rows: auto height and 100px height */
   }
   ```

### 2. **Track Sizing Functions**
   - **fr (Fraction Unit)**: Represents a fraction of the available space.
     ```css
     grid-template-columns: 1fr 2fr; /* Two columns: 1 part and 2 parts */
     ```

   - **px, %, em, rem**: Absolute and relative units.
     ```css
     grid-template-columns: 200px 1fr; /* Fixed width and flexible column */
     grid-template-columns: 50% 50%; /* Two equal columns taking half the container width each */
     ```

### 3. **Auto-Sizing**
   - **auto**: The size of the track is determined by the size of its content.
     ```css
     grid-template-rows: auto auto; /* Rows sized based on content */
     ```

### 4. **Minmax() Function**
   - Defines a size range for a grid track.
     ```css
     grid-template-columns: minmax(100px, 1fr); /* Column minimum 100px, flexible up to available space */
     ```

### 5. **repeat() Function**
   - Repeats track sizes.
     ```css
     grid-template-columns: repeat(3, 1fr); /* Three equal columns */
     ```

### 6. **Intrinsic and Extrinsic Sizing**
   - **min-content**: Smallest size content can be without overflow.
     ```css
     grid-template-columns: min-content;
     ```

   - **max-content**: Size that allows the content to fit without wrapping.
     ```css
     grid-template-columns: max-content;
     ```

   - **fit-content()**: Fits content up to a specified limit.
     ```css
     grid-template-columns: fit-content(200px); /* Fits content up to 200px */
     ```

### 7. **Grid Gap**
   - Sets the spacing between grid tracks.
     ```css
     grid-gap: 10px; /* Space between rows and columns */
     grid-row-gap: 10px; /* Space between rows */
     grid-column-gap: 10px; /* Space between columns */
     ```

### 8. **Aligning Grid Items**
   - **align-items**: Aligns items along the block axis (vertically).
     ```css
     align-items: center; /* Aligns items to the center */
     ```

   - **justify-items**: Aligns items along the inline axis (horizontally).
     ```css
     justify-items: center; /* Aligns items to the center */
     ```

   - **align-self** and **justify-self**: Align individual items.
     ```css
     .item {
       align-self: end; /* Aligns individual item to the end */
       justify-self: start; /* Aligns individual item to the start */
     }
     ```

### 9. **Grid Areas**
   - Defines named areas within the grid.
     ```css
     .container {
       display: grid;
       grid-template-areas:
         "header header"
         "sidebar main"
         "footer footer";
     }
     ```

   - Assign grid items to grid areas.
     ```css
     .header {
       grid-area: header;
     }
     .sidebar {
       grid-area: sidebar;
     }
     .main {
       grid-area: main;
     }
     .footer {
       grid-area: footer;
     }
     ```

### 10. **Advanced Example**
   Here's a complete example illustrating various grid sizing techniques:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <style>
       .container {
         display: grid;
         grid-template-columns: 1fr 2fr minmax(100px, 300px);
         grid-template-rows: auto 100px;
         grid-gap: 10px;
       }
       .item {
         background-color: lightblue;
         padding: 10px;
         border: 1px solid #000;
       }
       .header {
         grid-area: header;
       }
       .sidebar {
         grid-area: sidebar;
       }
       .main {
         grid-area: main;
       }
       .footer {
         grid-area: footer;
       }
     </style>
   </head>
   <body>
     <div class="container">
       <div class="item header">Header</div>
       <div class="item sidebar">Sidebar</div>
       <div class="item main">Main Content</div>
       <div class="item footer">Footer</div>
     </div>
   </body>
   </html>
   ```

