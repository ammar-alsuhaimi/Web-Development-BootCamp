**JavaScript DOM Manipulation & CSS Styling Summary**

**1\. Selecting Elements in the DOM**

- **Using querySelector()**
  - Selects the **first** matching element using CSS selectors.
  - Example: document.querySelector("h1") selects the first &lt;h1&gt; element.
- **Using querySelectorAll()**
  - Selects **all** matching elements and returns a NodeList (array-like object).
  - Example: document.querySelectorAll("li") selects all &lt;li&gt; elements.
- **Using getElementsByTagName()**
  - Returns a live HTMLCollection of all elements matching a tag name.
  - Example: document.getElementsByTagName("li") selects all &lt;li&gt; elements.
- **Using getElementsByClassName()**
  - Returns a live HTMLCollection of elements matching a class name.
  - Example: document.getElementsByClassName("btn") selects elements with class btn.
- **Using getElementById()**
  - Selects a **single** element by its ID (since IDs are unique).
  - Example: document.getElementById("title") selects the element with id="title".

**2\. Manipulating CSS Styles with JavaScript**

- You can modify styles dynamically by accessing the .style property of an element.
- Example:
- document.querySelector("h1").style.color = "red";

Changes the &lt;h1&gt; text color to red.

**Key Differences Between CSS and JavaScript Styling**

- JavaScript uses **camelCase** instead of CSS **kebab-case**:
  - **CSS:** font-size: 20px;
  - **JavaScript:** element.style.fontSize = "20px";
- Values must be **strings**, even for numbers:
  - **CSS:** padding: 10px;
  - **JavaScript:** element.style.padding = "10px";

**Example: Changing Button Background Color**

document.querySelector("button").style.backgroundColor = "yellow";

- The CSS property background-color is written as backgroundColor in JavaScript.

**3\. Querying and Selecting Nested Elements**

- To select elements **inside** another element, use **hierarchical selectors**.
- document.querySelector("ul li a").style.color = "red";
  - Selects the first &lt;a&gt; inside an &lt;li&gt; within a &lt;ul&gt;.
- To get **all** matching elements, use querySelectorAll().
- document.querySelectorAll(".item");
  - Selects all elements with class item.

**4\. Challenge Recap**

**Task:** Change the color of the Google link to red.  
**Solution:**

document.querySelector("li a").style.color = "red";

- Ensures that the &lt;a&gt; tag inside the &lt;li&gt; is targeted, not just the &lt;li&gt;.

**5\. Next Steps**

- **Separation of Concerns:** Keeping styles in CSS and toggling them using JavaScript.
- **More DOM Manipulation Techniques**: Adding, removing, and modifying elements dynamically.

This structured approach helps reinforce **DOM selection and styling** using JavaScript efficiently. 🚀

<https://www.w3schools.com/jsref/dom_obj_style.asp>