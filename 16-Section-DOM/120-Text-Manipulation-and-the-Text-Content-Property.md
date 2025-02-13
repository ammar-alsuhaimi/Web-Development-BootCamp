**Manipulating Text Content in the DOM**

**1\. Two Ways to Change Text Content**

When modifying text inside an HTML element, we can use:

- innerHTML
- textContent

They seem similar, but they have key differences.

**2\. Understanding innerHTML**

- Retrieves or sets the **HTML content** inside an element.
- Includes both **text and any HTML tags** inside the element.
- Can be used to insert new HTML dynamically.

**Example: Getting innerHTML**

&lt;h1 id="title"&gt;&lt;strong&gt;Hello&lt;/strong&gt;&lt;/h1&gt;

&lt;script&gt;

console.log(document.getElementById("title").innerHTML);

// Output: &lt;strong&gt;Hello&lt;/strong&gt;

&lt;/script&gt;

It returns " &lt;strong&gt;Hello&lt;/strong&gt; " because it includes the HTML tags inside the element.

**Example: Setting innerHTML**

document.querySelector("h1").innerHTML = "&lt;em&gt;Good Bye&lt;/em&gt;";

This changes the &lt;h1&gt; content to "Good Bye" but also **wraps it in &lt;em&gt;**, making it italicized.

**3\. Understanding textContent**

- Retrieves or sets **only the text** inside an element.
- Ignores any HTML tags inside the element.

**Example: Getting textContent**

&lt;h1 id="title"&gt;&lt;strong&gt;Hello&lt;/strong&gt;&lt;/h1&gt;

&lt;script&gt;

console.log(document.getElementById("title").textContent);

// Output: Hello

&lt;/script&gt;

It returns "Hello" without the &lt;strong&gt; tags.

**Example: Setting textContent**

document.querySelector("h1").textContent = "Good Bye";

This changes only the **text**, without inserting any additional HTML formatting.

**4\. When to Use innerHTML vs. textContent**

| **Feature** | **innerHTML** | **textContent** |
| --- | --- | --- |
| Includes HTML? | ✅ Yes, includes HTML tags | ❌ No, only text content |
| Can insert HTML? | ✅ Yes, can insert new HTML | ❌ No, treats everything as text |
| Safer for user input? | ❌ No, can lead to **XSS attacks** | ✅ Yes, no security risks |
| Performance | ⚠️ Slower (renders HTML) | 🚀 Faster (only text) |

💡 **Security Tip**: Avoid using innerHTML when working with **user input** because it can allow malicious scripts (XSS attacks).

**5\. Challenge: Practice Manipulating innerHTML and textContent**

Try these in your JavaScript console:

// Change text without formatting

document.querySelector("h1").textContent = "Good Bye";

// Change text with italicized formatting

document.querySelector("h1").innerHTML = "&lt;em&gt;Good Bye&lt;/em&gt;";

