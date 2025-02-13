

**1\. Project Overview**

- **Goal:**  
    Build a beautiful, simple website for a Web Design Agency (e.g., "dev.com") that demonstrates clean design with strong typography and imagery. The site should include:
  - Two main text blocks that describe the agency’s work.
  - A footer featuring the company motto: “Create, Develop Design.”
- **Design Intent:**  
    Although web design agencies often showcase their best work, their own websites tend to be minimalistic and clean. The project emphasizes simplicity and clarity in layout.

**2\. Layout and Responsiveness**

- **Default Layout (Desktop):**
  - The design features side-by-side blocks (for example, one block with an image and one block with text).
  - Navigation elements and imagery are positioned using techniques like floats (float-left and float-right) to achieve a balanced, two-column layout.
- **Responsive Behavior:**
  - When viewed on smaller screens (around 600px or less), the side-by-side blocks should stack vertically. This ensures optimal use of limited screen real estate.
  - The layout should adjust gracefully at various breakpoints. For example:
    - On larger screens, blocks appear side by side.
    - On mobile devices, blocks expand to 100% width and center themselves.
- **Key Techniques Utilized:**
  - **Floats and Inline-Block:**  
        Used to align elements next to each other in the desktop layout.
  - **Media Queries:**  
        Critical for detecting screen width (e.g., targeting 680px and below) and altering the layout (such as changing display from inline to block, setting width to 100%, and adjusting text alignment).
  - **Additional CSS Properties:**  
        The solution code may use properties like object-fit for image behavior and inline styling via <span>; tags to alter specific text colors (for instance, targeting a class like .creative to apply a blue color).

**3\. Project Instructions and Workflow**

- **Starting Files:**
  - You are provided with a starter index.html that contains the basic structure (images, text blocks, footer) but minimal styling.
  - **Important Constraint:**  
        Do not modify the HTML. All design work must be done via CSS to demonstrate your skills in combining selectors and applying responsive techniques.
- **Approach:**
  - **Examine the Layout:**  
        Preview the index.html file as is, and then compare it with a provided solution preview (using a URL or a “solution.html”) to understand the intended layout.
  - **Design Adaptability:**  
        While you can aim to replicate the given layout, you are free to create an alternative design as long as it meets the key requirements:
    - A visually pleasing, professional website for a creative agency.
    - Responsiveness that adapts the layout based on device width.
  - **Testing Responsiveness:**  
        Utilize browser tools (such as Chrome Developer Tools’ responsive design mode) to simulate various screen sizes and ensure your layout stacks or rearranges appropriately on devices like iPhones, tablets, and desktops.
  - **Reference and Troubleshooting:**  
        If encountering unfamiliar CSS properties (e.g., object-fit), use resources like MDN Developer Docs to look them up and understand their function.

**4\. Key Takeaways**

- **Responsive Design Principles:**  
    Learn to combine layout techniques (floats, inline-block, and block) with media queries to create designs that work across all devices.
- **Selector Usage:**  
    You might need to use creative selector combinations (such as targeting a span with a unique class) to achieve specific styling without altering the HTML structure.
- **Problem-Solving:**  
    The project encourages breaking down the overall layout into manageable parts (header, content blocks, footer) and addressing each with proper CSS techniques.

For further reading on media queries and responsive design, you can refer to MDN’s documentation on [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) and responsive design guides.