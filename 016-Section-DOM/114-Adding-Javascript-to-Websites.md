\---

\## Adding JavaScript to Websites

\### Introduction

Up till now, we've been learning about JavaScript and using it inside the Chrome Developer Tools console. This is the purest form of JavaScript, where we see the code as it is and understand what it does. However, learning about JavaScript is not useful if we don't apply it to our website. In this lesson, we'll incorporate JavaScript into our websites.

\### Setting Up the Project

1\. \*\*Create a New Folder\*\*

\- Name the folder \`DOM\`.

\- This folder will be used for our web development project.

2\. \*\*Add the Folder to Atom\*\*

\- Create a new HTML file named \`index.html\`.

3\. \*\*Add HTML Boilerplate\*\*

\- Add the traditional HTML boilerplate.

\- Title the website "My Website".

\- Link it with a stylesheet named \`styles.css\`.

\- Create the \`styles.css\` file.

4\. \*\*Add a Heading to the HTML\*\*

\- Add a heading that says "Hello".

\### Inserting JavaScript

\#### Inline JavaScript

1\. \*\*Add Inline JavaScript\*\*

\- Add an attribute \`onload\` to the \`&lt;body&gt;\` tag.

\- Example:

\`\`\`html

&lt;body onload='alert("Hello");'&gt;

\`\`\`

\- Ensure quotation marks are correctly nested.

2\. \*\*Save and Test\*\*

\- Save the webpage and refresh in Chrome to see the alert.

\#### Internal JavaScript

1\. \*\*Add Internal JavaScript\*\*

\- Use a \`&lt;script&gt;\` tag inside the HTML file.

\- Example:

\`\`\`html

&lt;script type="text/javascript"&gt;

alert("Hello");

&lt;/script&gt;

\`\`\`

2\. \*\*Save and Test\*\*

\- Save the webpage and refresh in Chrome to see the alert.

\#### External JavaScript

1\. \*\*Create External JavaScript File\*\*

\- Create a new file named \`index.js\`.

\- Point to it using the \`&lt;script&gt;\` tag with \`src\` attribute.

\- Example:

\`\`\`html

&lt;script src="index.js"&gt;&lt;/script&gt;

\`\`\`

2\. \*\*Add JavaScript Code to the External File\*\*

\- Example content:

\`\`\`javascript

alert("Hello");

\`\`\`

3\. \*\*Save and Test\*\*

\- Save the webpage and refresh in Chrome to see the alert.

\### Position of Script Tag

1\. \*\*CSS Positioning\*\*

\- CSS is placed in the \`&lt;head&gt;\` to load styles before content.

2\. \*\*JavaScript Positioning\*\*

\- Place the \`&lt;script&gt;\` tag at the end of the body for best practice.

\- Example:

\`\`\`html

&lt;script src="index.js"&gt;&lt;/script&gt;

\`\`\`

\### Practical Example

1\. \*\*JavaScript Changing HTML Content\*\*

\- Example JavaScript to change an \`&lt;h1&gt;\` element's inner HTML:

\`\`\`javascript

document.querySelector("h1").innerHTML = "Good Bye";

\`\`\`

2\. \*\*Test Script Placement\*\*

\- If the script is above the \`&lt;h1&gt;\`, it will result in an error.

\- Place the script at the end of the body to ensure it works.

\### Conclusion

Best practice is always to put the script right at the end, just before the closing \`&lt;/body&gt;\` tag, to ensure all HTML elements are loaded before the script runs. This also makes the website appear to load faster.

\---

