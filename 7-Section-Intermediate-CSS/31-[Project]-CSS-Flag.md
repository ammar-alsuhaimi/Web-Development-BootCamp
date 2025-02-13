**1\. Project Overview**

- **Objective:**  
    Create a visual representation of the flag of Laos solely with HTML and CSS. 
    This project challenges you to consolidate your skills in combining CSS selectors, managing specificity, and positioning elements.
- **Inspiration:**  
    The project is inspired by advanced CSS art (e.g., Diana Adrian’s portfolio at 
    [purecss-lace](https://diana-adrianne.com/purecss-lace/)) and CSS recreations like “Simpsons in CSS” (
    [simpsons in CSS](https://pattle.github.io/simpsons-in-css/)). While those projects may involve hundreds of lines of CSS, this challenge is designed to be more approachable.

**2\. HTML Structure and Restrictions**

- **Provided HTML:**
  - The starting HTML (in the file index.html) is minimal and deliberately “vague”—it doesn’t have extra classes or IDs to make targeting easy.
  - **Important Rule:** You are not allowed to change the HTML. All work must be done by writing CSS in the provided style.css.
- **Implication:**  
    You must rely on creative use of combined selectors (grouping, child selectors, descendant selectors, and chaining selectors) to target the elements precisely.

**3\. Layout Breakdown and Styling Goals**

**A. The Flag Container (Red Rectangle)**

- **Task:**
  - Style the outermost &lt;div&gt; (with the class .flag) to become a red rectangle.
- **Implementation:**
  - Set a fixed width (e.g., 900px) and height (e.g., 600px).
  - Apply a red background color using the provided hex code (obtained by inspecting the reference flag image).

**B. The Blue Rectangle**

- **Task:**
  - Within the red container, a child &lt;div&gt; should form a blue rectangle.
- **Implementation:**
  - Use a child combinator (e.g., .flag > div) to target the immediate child.
  - Set its width to 100% (matching the parent) and its height to half of the red container (e.g., 300px).
  - Apply the blue background color (again using precise hex codes from the reference).

**C. The White Circle**

- **Task:**
  - Inside the blue rectangle, create a white circle that may also contain text.
- **Implementation:**
  - Use a descendant selector to target the inner &lt;div&gt; (or similar element) nested within the blue rectangle.
  - Set fixed dimensions (e.g., 200px by 200px) and apply a white background.
  - Use border-radius: 50% to transform the square into a circle.

**D. Positioning Elements**

- **General Positioning Strategy:**
  - Set the .flag container to position: relative so that its child elements can be positioned relative to it.
  - Apply position: absolute to the blue rectangle and the white circle as needed.
- **Examples of Calculations:**
  - Shift the blue rectangle down by a specific number of pixels (e.g., 150px) to simulate the flag’s layout.
  - Center the white circle within the blue rectangle by calculating offsets based on the blue rectangle’s dimensions (e.g., shifting down by 50px if the blue rectangle’s height is 300px, and similarly from the left).
- **Handling Default Margins:**
  - Remove default margins on paragraph elements (e.g., using p { margin: 0; }) so that spacing doesn’t inadvertently misalign the layout.

**E. Text Styling**

- **Text Elements:**
  - There are two paragraph elements: one placed at the top of the flag and another inside the white circle.
- **Styling Requirements:**
  - Adjust font sizes (e.g., using a large value like 5rem for prominent text).
  - Center text using text-align: center.
  - Change text colors selectively (for example, making one paragraph white and another black).
- **Selector Challenge:**
  - Since you cannot add extra classes or IDs to the HTML, you’ll need to craft selectors that precisely target these paragraphs. Techniques such as chaining selectors or using the browser’s “copy selector” feature can help identify the right path.

**4\. Key Techniques Utilized**

- **Combining Selectors:**  
    Use grouping, child selectors (using >), descendant selectors (using a space), and chaining selectors (without spaces) to pinpoint elements in the provided HTML structure.
- **Understanding Specificity:**  
    Apply the proper specificity rules so that more specific selectors override general ones when styling similar elements.
- **CSS Positioning:**  
    Mix position: relative on parent containers with position: absolute on children to control layout precisely. This helps in aligning the blue rectangle within the red container and centering the white circle within the blue rectangle.
- **Practical Debugging:**  
    Use tools like the Chrome Inspector (and even plugins like Pesticide) to diagnose spacing issues—for example, recognizing that default margins on paragraphs might push elements out of alignment.

**5\. Final Outcome**

- **Visual Result:**  
    When completed correctly, your flag should display:
  - A large red rectangle (the flag’s background).
  - A blue rectangle positioned within the red area.
  - A white circle correctly centered within the blue rectangle.
  - Appropriately styled text that follows the design of the Laos flag.


