### HTML Void Elements

#### What are Void Elements?

- **Void Elements**: HTML elements that do not have any content inside them and are self-closing.

- **Non-Void Elements**: Elements like paragraph or heading elements, which contain content.

#### Key Void Elements:

1. **Horizontal Rule (`<hr />`)**:
   - Creates a horizontal line to separate content.
   - Syntax: `<hr />`
   - Used for visual separation between different sections.

2. **Break (`<br />`)**:

   - Inserts a line break within a paragraph.
   - Syntax: `<br />`
   - Useful for poems, addresses, or formatting that requires line breaks within the same paragraph.

#### Syntax Differences:

- **Self-Closing Tags**: `<hr />` and `<br />` have a forward slash before the closing angle bracket.
- **Convention**: Typically includes a space before the forward slash, e.g., `<hr />` vs. `<hr>` (both are valid).

#### Example Usage:

- **Horizontal Rule Example**:
  ```html
  <p>First paragraph.</p>
  <hr />
  <p>Second paragraph.</p>
  ```

  - Renders as two paragraphs separated by a horizontal line.

- **Break Element Example**:

  ```html
  <p>Roses are red,<br />
  Violets are blue,<br />
  Sugar is sweet,<br />
  And so are you.</p>
  ```

  - Renders as a poem with each line on a new line within the same paragraph.



#### Best Practices:

- **Accessibility**: Avoid using `<br />` to create new paragraphs; use `<p>` instead.
- **Code Readability**: Use the closing slash in void elements to clearly distinguish them from non-void elements.

---
