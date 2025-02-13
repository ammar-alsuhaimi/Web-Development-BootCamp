

**1\. Overview of Media Queries**

- **Purpose:**  
    Media queries let you apply different CSS rules depending on the screen size (or other media features). This allows a website to adjust its layout and styling for devices ranging from mobile phones to desktops.
- **Key Idea:**  
    Instead of a traditional CSS selector (e.g., .class { ... }), you start with the @media keyword followed by a condition (a breakpoint) that specifies when the enclosed styles should apply.

**2\. Basic Syntax**

- **General Form:**
- @media (max-width: 600px) {
- /\* Styles here will apply when the viewport is 600px or less \*/
- }
  - **max-width:** Applies the rules when the viewport is _at or below_ a specified width.
  - **min-width:** Applies the rules when the viewport is _at or above_ a specified width.
- **Combined Conditions:**  
    You can target a range by combining conditions with the and keyword. For example:
- @media (min-width: 600px) and (max-width: 900px) {
- /\* Styles for screens between 600px and 900px wide \*/
- }
- **Media Types:**  
    Sometimes you may see keywords like screen (or print) to specify the type of device. For example:
- @media screen and (max-width: 600px) {
- /\* Styles for screens 600px wide or less \*/
- }

**3\. Practical Examples**

**A. Changing Element Dimensions**

- **Scenario:**  
    You have a <div> with a blue background set to 200px by 200px by default.
- **Media Query Example:**  
    To adjust the size on smaller screens (e.g., mobile devices), you might write:
- .box {
- width: 200px;
- height: 200px;
- background-color: blue;
- }
- @media (max-width: 600px) {
- .box {
- width: 100px;
- height: 100px;
- }
- }
  - **Outcome:** On screens 600px wide or less, the box becomes a smaller square (100px by 100px) to better fit the available space.

**B. Changing Typography**

- **Example Use-Case:**  
    Adjust the font size of headings (like h1) so that text appears appropriately sized on mobile devices versus desktop displays.
- h1 {
- font-size: 3rem;
- }
- @media (max-width: 600px) {
- h1 {
- font-size: 2rem;
- }
- }

**C. Targeting Different Device Ranges**

- **Breakpoints for Devices:**  
    The lesson outlines common ranges:
  - **Mobile:** Approximately 319px to 480px wide.
  - **Tablets (iPads):** Approximately 481px to 1200px wide.
  - **Laptops:** Approximately 1201px to 1600px wide.
  - **Desktops:** 1601px and wider.
- **Example:**  
    Changing the background color of the <body> at different breakpoints:
- body {
- background-color: aquamarine; /\* Default \*/
- }
- @media (max-width: 480px) {
- body {
- background-color: salmon; /\* Mobile \*/
- }
- }
- @media (min-width: 481px) and (max-width: 1200px) {
- body {
- background-color: powderblue; /\* Tablets \*/
- }
- }
- @media (min-width: 1201px) and (max-width: 1600px) {
- body {
- background-color: limegreen; /\* Laptops \*/
- }
- }
- @media (min-width: 1601px) {
- body {
- background-color: seagreen; /\* Desktops \*/
- }
- }

**4\. Testing Responsiveness**

- **Browser Tools:**  
    Use Chrome Developer Tools to simulate different devices. Open Developer Tools and click the “Toggle device toolbar” button to select from preset devices like iPhone SE, iPhone 12, or iPad Air. You can also set custom dimensions to see how your media queries affect your layout.
- **Real-World Application:**  
    The exercise asks you to create media queries that change the background color of the body at different breakpoints. This simple task demonstrates how media queries can alter a website’s appearance to suit various device sizes.

**5\. Conclusion**

- **Summary:**  
    Media queries provide a straightforward method to adjust CSS based on the viewport’s width (and other properties). By setting breakpoints with max-width and min-width, you can tailor styles for mobile, tablet, laptop, and desktop screens.


<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries>