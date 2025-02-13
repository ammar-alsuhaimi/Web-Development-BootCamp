**1\. Project Introduction**

- **Objective:**  
    Create a web layout inspired by Piet Mondrian’s paintings using CSS Grid.
- **Inspiration:**  
    Mondrian’s compositions (e.g., _Composition No. III with Red, Blue, Yellow and Black_), known for their grid-like, geometric style.

**2\. Project Overview**

- **Design Requirements:**
  - Use a series of <div> elements to mimic the squares/rectangles of a Mondrian painting.
  - Follow specific dimensions and colors provided (or choose your own Mondrian composition).
  - The final layout should be pixel-perfect and centered on the screen.
- **Starting Files:**  
    Download the provided starter files which include an index.html and reference to a dimensions.png containing measurements and hex codes.

**3\. Building the Layout**

- **HTML Structure:**
  - No pre-written HTML/CSS is provided—you must create all the code.
  - The solution uses as many <div> elements as there are distinct squares in the painting.
  - Each <div> may receive specific classes to set its background color.
- **CSS Grid Container Setup:**
  - **Container Dimensions:**  
        Set a fixed height and width based on the measured dimensions from the provided image.
  - **Display Property:**  
        Set the container to display: grid.
  - **Tracks Definition:**
    - **Columns:** Define four columns with specific widths (some columns span multiple squares).
    - **Rows:** Define four rows with specific heights.
  - **Gaps:**  
        Use a fixed gap (e.g., 9px) which appears as the black lines between the colored areas.
  - **Background Color:**  
        Assign a background color to the grid container to mimic the grid lines since you can’t change line colors directly.
- **Placing and Spanning Grid Items:**
  - **Default Placement:**  
        Items are placed in order, one per grid cell.
  - **Item Positioning:**
    - Use grid-column and grid-row (or the shorthand grid-area) to have items span multiple columns or rows.
    - Examples:
      - A large white block might span three columns.
      - Another element may span two rows (using grid-row: span 2).
  - **Alternative Positioning:**  
        You can also explicitly set the start and end lines for columns and rows.
- **Combining with Flexbox for Centering:**
  - Some grid items contain content (like emojis) that need to be centered.
  - Convert individual <div> into flex containers by setting display: flex and using:
    - justify-content: center (horizontal centering)
    - align-items: center (vertical centering)

**4\. Project Execution & Customization**

- **Following the Measurements:**
  - You may choose to replicate the exact measured version provided (with specific hex codes and dimensions) or select another Mondrian composition by researching different images.
- **Final Touches:**
  - Center the entire grid on the screen.
  - Ensure that the layout is as close as possible to the provided design, achieving a “masterpiece” that reflects Mondrian’s style.

**5\. Conclusion and Reflection**

- **Learning Outcomes:**
  - The project combines CSS Grid and Flexbox.
  - It reinforces skills in creating complex layouts, positioning items, and layering elements.
- **Encouragement:**
  - Experiment with different compositions.
  - Have fun creating pixel-perfect layouts that could be as valuable as a masterpiece!
