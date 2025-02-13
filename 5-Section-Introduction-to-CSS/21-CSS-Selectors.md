**CSS Selectors**

**What Are CSS Selectors?**

CSS selectors are used to choose which HTML elements to style. 
They define where the CSS rules should be applied.

**Types of CSS Selectors**

1. **Element Selector**
    - Targets all elements of a specific type (e.g., h1, p).
    - Example:
    - h1 {
    - color: blue;
    - }
2. **Class Selector**
    - Targets elements with a specific class, using a dot (.) before the class name.
    - Can be applied to multiple elements.
    - Example:
    - .red-text {
    - color: red;
    - }
3. **ID Selector**
    - Targets a single unique element using a hash (#).
    - An ID should be used only once per page.
    - Example:
    - #main {
    - color: green;
    - }
4. **Attribute Selector**
    - Targets elements based on the presence or value of an attribute.
    - Example (targeting &lt;p&gt; elements with a draggable attribute):
    - p\[draggable\] {
    - color: red;
    - }
    - Example (targeting elements with a specific attribute value):
    - li\[value="4"\] {
    - color: blue;
    - }
5. **Universal Selector**
    - Targets all elements on the page using an asterisk (\*).
    - Example (centering all elements):
    - \* {
    - text-align: center;
    - }

**Exercise Summary**

- Students were given an HTML file and a CSS file to practice selectors.
- Tasks involved applying different CSS rules using element, class, ID, attribute, and universal selectors.
- The goal was to style text based on the given conditions without modifying the HTML.

By mastering these selectors, developers can apply styles efficiently and improve the structure of their CSS.

The MDN Web Docs page you linked is a great resource for understanding the <li> (List Item) HTML element. 

Here are **additional resources** that can help you deepen your knowledge of lists in HTML:

**Official Documentation & References**

1. [MDN Web Docs – <ul> (Unordered List)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
    - Covers unordered lists and how <li> works inside them.
2. [MDN Web Docs – <ol> (Ordered List)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
    - Explains numbered lists and how <li> items are ordered.
3. [MDN Web Docs – <menu> (Menu List)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
    - Introduces <menu> which is an alternative to <ul> in specific cases.
4. [W3Schools – HTML Lists](https://www.w3schools.com/html/html_lists.asp)
    - Interactive examples for unordered, ordered, and description lists.

**Interactive Learning Platforms**

1. [freeCodeCamp – HTML & CSS Course](https://www.freecodecamp.org/learn)
    - Offers exercises on lists with real-time coding practice.
2. [CSS-Tricks – Styling Lists](https://css-tricks.com/styling-list-items/)
    - Advanced styling techniques for <li> elements.
3. [Web.dev – HTML Lists Guide](https://web.dev/learn/html/lists/)
    - A step-by-step guide on lists with best practices.

For Additional Information :

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li>