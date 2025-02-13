Let's dive deeper into all things CSS colors:

### Color Values
1. **Hexadecimal Colors**: Represented by a `#` followed by 6 hexadecimal digits (e.g., `#FF5733`).
   - Shortened form possible for some colors: `#F53` for `#FF5533`.
   
2. **RGB Colors**: Define colors using Red, Green, and Blue components. Each value ranges from 0 to 255 (e.g., `rgb(255, 87, 51)`).
   
3. **RGBA Colors**: RGB colors with an alpha channel for transparency (e.g., `rgba(255, 87, 51, 0.5)`).
   
4. **HSL Colors**: Use Hue, Saturation, and Lightness to define colors (e.g., `hsl(9, 100%, 60%)`).
   
5. **HSLA Colors**: HSL colors with an alpha channel for transparency (e.g., `hsla(9, 100%, 60%, 0.5)`).
   
6. **Color Names**: Use predefined color names (e.g., `red`, `blue`, `green`).

### Applying Colors
1. **Text Color**:
   ```css
   p {
     color: #FF5733;
   }
   ```

2. **Background Color**:
   ```css
   div {
     background-color: rgb(255, 87, 51);
   }
   ```

3. **Border Color**:
   ```css
   .box {
     border-color: hsl(9, 100%, 60%);
   }
   ```

### Opacity
- Control the transparency of an element using the `opacity` property.
   ```css
   .transparent {
     opacity: 0.5;
   }
   ```

### Gradients
1. **Linear Gradient**:
   - Transition between colors along a straight line.
   ```css
   .gradient {
     background: linear-gradient(to right, red, yellow);
   }
   ```

2. **Radial Gradient**:
   - Transition between colors radiating from an origin.
   ```css
   .radial-gradient {
     background: radial-gradient(circle, red, yellow);
   }
   ```

### Additional Color Properties
1. **Color Inheritance**:
   - Elements inherit color properties from their parents unless specified otherwise.
   ```css
   .parent {
     color: blue;
   }
   
   .child {
     color: inherit; /* Will be blue */
   }
   ```

2. **Current Color (`currentColor`)**:
   - Use `currentColor` to apply the current color value to other properties like border.
   ```css
   .element {
     color: green;
     border: 2px solid currentColor; /* Border will be green */
   }
   ```

### Advanced Techniques
1. **CSS Variables for Colors**:
   - Define custom properties (variables) for colors to maintain consistency.
   ```css
   :root {
     --main-bg-color: #FF5733;
   }
   
   body {
     background-color: var(--main-bg-color);
   }
   ```

2. **Color Functions**:
   - Use CSS functions to manipulate colors (e.g., `lighten()`, `darken()`, `saturate()`, `desaturate()`).
   ```css
   .light-bg {
     background-color: lighten(#FF5733, 20%);
   }
   ```

### Color Accessibility
1. **Contrast Ratios**:
   - Ensure sufficient contrast between text and background for readability.
   - Tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) can help.

2. **Color Blindness**:
   - Use tools to check how colors are perceived by colorblind users (e.g., [Color Oracle](https://colororacle.org/)).
   - Tools like \[Color Hunt\](<https://colorhunt.co>) offer professionally designed color palettes with hex codes.


**Extra** : 
<https://developer.mozilla.org/en-US/docs/Web/CSS/named-color>

<https://www.csfieldguide.org.nz/en/interactives/rgb-mixer/>