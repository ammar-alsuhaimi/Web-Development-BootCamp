\---

\## Manipulating HTML Element Attributes with JavaScript

\### Introduction

Now that we've seen how you can manipulate the style and the text of an HTML element, the last thing I want to show you is how to manipulate the attributes of any element.

\### Understanding Attributes

Attributes are everything that goes inside the tag, other than the tag name itself. For example:

\- \`class\` is an attribute.

\- \`href\` for an anchor tag is an attribute.

\- \`src\` for an image is an attribute.

\### Example Scenario

We have a link that points towards Google. Now, let's change it to point towards Bing instead.

1\. \*\*Selecting the Element\*\*:

\- Use \`document.querySelector("a")\` to get the first anchor tag.

\- Example:

\`\`\`javascript

let link = document.querySelector("a");

\`\`\`

2\. \*\*Getting the List of Attributes\*\*:

\- Use the \`.attributes\` property to get a list of all attributes attached to the element.

\- Example:

\`\`\`javascript

let attributes = link.attributes;

console.log(attributes);

\`\`\`

3\. \*\*Retrieving the Current Value of an Attribute\*\*:

\- Use \`.getAttribute("attributeName")\` to get the value of a specific attribute.

\- Example:

\`\`\`javascript

let hrefValue = link.getAttribute("href");

console.log(hrefValue); // Output: "<http://www.google.com>"

\`\`\`

4\. \*\*Changing the Attribute Value\*\*:

\- Use \`.setAttribute("attributeName", "newValue")\` to set a new value for the attribute.

\- Example:

\`\`\`javascript

link.setAttribute("href", "<http://www.bing.com>");

\`\`\`

5\. \*\*Testing the Change\*\*:

\- Even though the inner HTML still says "Google", clicking the link will now take you to Bing.

\- Example:

\`\`\`html

&lt;a href="<http://www.google.com"&gt;Google&lt;/a>&gt;

\`\`\`

\### Code Example

Here’s the complete code example:

\`\`\`html

&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;

&lt;title&gt;Manipulating Attributes&lt;/title&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;a href="<http://www.google.com"&gt;Google&lt;/a>&gt;

&lt;script type="text/javascript"&gt;

// Select the anchor tag

let link = document.querySelector("a");

// Get the current value of the href attribute

let hrefValue = link.getAttribute("href");

console.log(hrefValue); // Output: "<http://www.google.com>"

// Set a new value for the href attribute

link.setAttribute("href", "<http://www.bing.com>");

// Verify the change

console.log(link.getAttribute("href")); // Output: "<http://www.bing.com>"

&lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;

\`\`\`

\### Conclusion

This is a quick and easy way to get, set, and see what the attributes are for any element you select in the DOM. By using \`getAttribute\` and \`setAttribute\`, you can dynamically manipulate attributes of elements in your HTML document.

\---

