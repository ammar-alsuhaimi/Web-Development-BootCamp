
---

### 1. **EJS Tags and Their Functions**

The basic structure of an EJS tag is `<% ... %>`, but what follows the opening tag determines the type of tag and what it does:

#### **Output Tags (`<%= %>`)**
- **Syntax:** `<%= ... %>`
- **Function:** This tag is used to output JavaScript values into the HTML content of the page. It evaluates the JavaScript expression inside the tag and inserts the result directly into the template.
- **Example:**
  ```ejs
  <%= name %>
  ```
  If `name` is `"Angela"`, the rendered output in the HTML will be:
  ```html
  Angela
  ```

#### **Code-only Tags (`<% %>`)**
- **Syntax:** `<% ... %>`
- **Function:** This tag executes JavaScript code but does **not** output anything into the final HTML. It is typically used for loops, conditionals, or other JavaScript logic that doesn't need to appear in the rendered page.
- **Example:**
  ```ejs
  <% if (seconds % 2 === 0) { %>
    <ul>
      <% fruits.forEach(function(fruit) { %>
        <li><%= fruit %></li>
      <% }) %>
    </ul>
  <% } %>
  ```
  This code will check if the number of seconds is even and, if so, render a list of fruits.

#### **Escaped HTML Tags (`<%- %>`)**
- **Syntax:** `<%- ... %>`
- **Function:** Similar to `<%= %>`, but the output is **escaped**. This means that any HTML inside the JavaScript expression will be treated as plain text (i.e., HTML tags will not be rendered). This is useful when inserting user-generated content into the page to prevent cross-site scripting (XSS) vulnerabilities.
- **Example:**
  ```ejs
  <%- rawHtmlContent %>
  ```
  If `rawHtmlContent` is `"<strong>Hello!</strong>"`, it will be rendered as:
  ```html
  <strong>Hello!</strong>
  ```

#### **Escaping EJS Tags (`<%% %>`)**
- **Syntax:** `<%% ... %%>`
- **Function:** This tag is used to escape the EJS tags themselves. This means that the contents inside the `<%% ... %%>` will be displayed **as text**, not as an actual EJS expression.
- **Example:**
  ```ejs
  <%%= someExpression %>
  ```
  This will render `<%= someExpression %>` as plain text on the page, which is useful when you want to teach about EJS tags or show how they work.

#### **Comments (`<%# %>`)**
- **Syntax:** `<%# ... %>`
- **Function:** This tag is used to add comments to your EJS template. Anything inside this tag will not be rendered in the final output, which makes it useful for annotating your code.
- **Example:**
  ```ejs
  <%# This is a comment and will not be displayed %>
  ```

#### **Includes (`<%- include 'file.ejs' %>`)**
- **Syntax:** `<%- include 'file.ejs' %>`
- **Function:** The `include` tag allows you to include the contents of another EJS file into the current template. This is helpful for reusing common components (e.g., headers, footers) across different pages.
- **Example:**
  ```ejs
  <%- include 'footer.ejs' %>
  ```
  This would insert the contents of `footer.ejs` wherever the `include` tag is placed in the current template.

---

### 2. **Practical Example of Using EJS**

The video tutorial provides an example with a list of fruits and demonstrates how to render this list dynamically based on the current number of seconds.

- **Passing Data to EJS:**
  In the example, the server sends a data object to the EJS template. This object contains various properties like `title`, `seconds`, and `fruits` (an array).
  - `title`: A string (e.g., "EJS Example").
  - `seconds`: A number representing the current second.
  - `fruits`: An array (e.g., `['apple', 'banana', 'cherry']`).

- **Using Conditional Logic:**
  The tutorial demonstrates how to conditionally render the list of fruits based on whether the current number of seconds is even or odd. This involves the use of EJS's code-only tags `<% %>` to execute the JavaScript condition.
  - Example:
    ```ejs
    <% if (seconds % 2 === 0) { %>
      <ul>
        <% fruits.forEach(function(fruit) { %>
          <li><%= fruit %></li>
        <% }) %>
      </ul>
    <% } else { %>
      <p>No items to display.</p>
    <% } %>
    ```
  - If the seconds value is even, the list of fruits will be rendered; otherwise, the message "No items to display" will be shown.

- **Rendering HTML Safely:**
  The `rawHtmlContent` example shows how to safely insert HTML into the template using the `<%- %>` tag. For instance, if you want to insert bold text or other HTML formatting, the content can be passed as raw HTML to be rendered directly.

---

### 3. **The Exercise**

The exercise in the tutorial asks you to:
1. Display the `title` in an `<h1>` tag.
2. Display the current `seconds` in a `<p>` tag.
3. Conditionally display the list of fruits if the number of seconds is even.
4. Use the `include` tag to insert the contents of `footer.ejs`.

The **solution** involves:
1. Using the `<%= %>` tag to output the `title` and `seconds`.
2. Using the `<% %>` tags for the logic to check whether the seconds are even or odd.
3. Using `<%- %>` for safely rendering raw HTML content.
4. Using `<%- include 'footer.ejs' %>` to insert a common footer.

---

### 4. **Solution Walkthrough**

Here's a step-by-step walkthrough of the solution:

- **Displaying the Title:**
  Use the output EJS tag to insert the `title` in the `<h1>` tag:
  ```ejs
  <h1><%= title %></h1>
  ```

- **Displaying the Current Seconds:**
  Similarly, the `seconds` variable is inserted into a `<p>` tag:
  ```ejs
  <p>Current second: <%= seconds %></p>
  ```

- **Conditional Rendering of Fruits:**
  The fruits list is displayed only if the number of seconds is even. The `if` statement is wrapped in a `<% %>` tag, and the `fruits` array is looped over with the `forEach` method to render each item in a list item `<li>`:
  ```ejs
  <% if (seconds % 2 === 0) { %>
    <ul>
      <% fruits.forEach(function(fruit) { %>
        <li><%= fruit %></li>
      <% }) %>
    </ul>
  <% } else { %>
    <p>No items to display.</p>
  <% } %>
  ```

- **Rendering HTML Content:**
  If you want to include raw HTML, use the `<%- %>` tag to avoid escaping the content:
  ```ejs
  <%- htmlContent %>
  ```

- **Including a Footer:**
  Finally, the footer is included from a separate `footer.ejs` file using the `include` tag:
  ```ejs
  <%- include 'footer.ejs' %>
  ```

---

### Conclusion

This detailed breakdown covers the major points from the EJS tutorial, explaining the different EJS tags and how they can be used to dynamically render content based on data passed from the server. The practical example demonstrates real-world use cases like conditionally rendering elements and including reusable components.

