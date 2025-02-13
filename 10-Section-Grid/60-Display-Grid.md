**CSS Grid**:

**Introduction to CSS Grid**

- CSS Grid is a powerful tool for creating **two-dimensional layouts**.
- While **Flexbox** is great for **one-dimensional (row/column) layouts**, **Grid** excels in managing content along both **X and Y axes**.
- Complex layouts, such as the **Swiss weather forecast website**, are much easier to create using **Grid** rather than **Flexbox** or older techniques like **floats**.

**Grid vs. Flexbox**

| **Feature** | **Flexbox** | **Grid** |
| --- | --- | --- |
| **Structure** | 1D (row/column) | 2D (rows & columns) |
| **Alignment** | Aligns items along a single axis | Aligns items in a structured grid |
| **Responsiveness** | Flexible and adapts dynamically | Maintains structured layouts |
| **Use Case** | Great for navbars, menus, buttons, or aligning items | Best for layouts like dashboards, galleries, and complex UI structures |

**Combining Grid & Flexbox**

- Most modern layouts use **both** Grid and Flexbox.
- Example: A **grid-based layout** can contain **a Flexbox-based component** (e.g., aligning items inside a grid cell).

**Understanding Grid Syntax**

1. **Creating a Grid Container**
2. .container {
3. display: grid;
4. }
5. **Defining Columns & Rows**
6. grid-template-columns: 1fr 2fr;
7. grid-template-rows: 1fr 1fr;
    - Defines a **2-column layout** where the **second column is twice as wide** as the first.
    - Rows are of **equal height**.
8. **Setting Grid Gaps**
9. gap: 10px;
    - Adds spacing between rows and columns **without using margins**.

**CSS Grid Challenge: Creating a Chessboard**

**Goal**

- Use **Grid** to create an **8×8 chessboard** with alternating black & white squares.
- Each square should be **100×100 pixels**.

**Steps to Solve**

1. **Set Up the Grid Container**
2. .container {
3. display: grid;
4. grid-template-columns: repeat(8, 100px);
5. grid-template-rows: repeat(8, 100px);
6. width: 800px; /\* Ensures the board maintains size \*/
7. }
8. **Style Chess Squares**
9. .white {
10. width: 100px;
11. height: 100px;
12. background-color: white;
13. }
14. .black {
15. width: 100px;
16. height: 100px;
17. background-color: black;
18. }
19. **Adjust Layout**
    - Ensure **divs are correctly placed** inside the grid.
    - Fix **extra spacing issues** by explicitly setting the **container width**.

**Key Takeaways**

- **Grid** is best for structured **2D layouts**, while **Flexbox** is ideal for **single-axis alignment**.
- Combining **Grid & Flexbox** allows for more **flexible, complex layouts**.
- **Grid-template-columns** and **grid-template-rows** define the structure.
- **Grid-gap** adds spacing without extra margin or padding.
- **Practical exercise**: Creating a **chessboard** using Grid.

