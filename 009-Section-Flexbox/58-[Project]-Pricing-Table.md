**HTML Structure:**

The HTML is pre-structured, containing all necessary text elements for the pricing table. This includes containers for each pricing plan, headings, feature lists, and buttons.

**CSS Styling:**

The CSS begins with the application of the "Sono" Google font to enhance typography. The primary focus is on utilizing Flexbox properties to achieve a responsive layout.

**Flexbox Implementation:**

1. **Container Setup:**
    - A .pricing-container class is designated as the Flexbox container.
    - display: flex; is applied to enable Flexbox.
    - justify-content: center; centers the items horizontally.
    - align-items: center; centers the items vertically.
    - gap: 20px; introduces space between the flex items.
    - height: 100vh; sets the container height to the full viewport height, ensuring vertical centering.
2. **Pricing Plan Styling:**
    - Each plan is assigned a .pricing-plan class.
    - flex: 1; allows the plans to grow and shrink equally.
    - max-width: 400px; restricts the maximum width to prevent overly wide cards on large screens.
    - padding: 20px; adds internal spacing.
    - background-color: #f0f0f0; sets a light gray background.
    - border-radius: 5px; rounds the corners slightly.
    - text-align: center; centers the text within each plan.
3. **Typography and Spacing:**
    - The .plan-title class is styled with an increased font-size and font-weight: bold; to highlight the plan names.
    - The .plan-price class features an even larger font-size to emphasize pricing.
    - The .plan-features class, targeting the unordered list of features, has list-style: none; to remove default bullets and adjusted padding and margin for spacing.
4. **Button Styling:**
    - Buttons within the plans are styled with a distinct background color, white text, rounded corners, and no border to enhance their appearance.

**Responsive Design with Media Queries:**

To ensure the pricing table is responsive:

- A media query is implemented to detect screen widths below 1250px.
- Within this media query:
  - The .pricing-container's flex-direction is changed to column, stacking the plans vertically.
  - height: 100%; is set to allow the container to adjust to the content height, preventing overflow issues.

This approach leverages Flexbox's capabilities to create a responsive and adaptable pricing table that maintains usability across various screen sizes.



