**Separation of Concerns: Keeping Code Organized**

**1\. Understanding Separation of Concerns**

- **HTML** → Responsible for content.
- **CSS** → Responsible for styling.
- **JavaScript** → Responsible for behavior (interactivity).
- Instead of modifying styles **directly** using JavaScript (.style.color = "red"), we should **apply or remove CSS classes dynamically**.

**2\. Using classList to Modify Styles Dynamically**

Every DOM element has a classList property, which allows us to:

- **Add a class** → element.classList.add("class-name")
- **Remove a class** → element.classList.remove("class-name")
- **Toggle a class** → element.classList.toggle("class-name")

**Example: Adding a Class Dynamically**

document.querySelector("button").classList.add("invisible");

This adds the invisible class to the button, applying any CSS rules associated with it.

**Example: Removing a Class**

document.querySelector("button").classList.remove("invisible");

This removes the invisible class, restoring the element's default styles.

**Example: Toggling a Class**

document.querySelector("button").classList.toggle("invisible");

- If the invisible class **is present**, it gets **removed**.
- If the invisible class **is not present**, it gets **added**.
- This is useful for things like hiding/showing elements dynamically.

**3\. Challenge Recap: Creating and Applying a Class**

**Step 1: Define the Class in CSS**

Inside your **styles.css** file:

.huge {

font-size: 10rem;

color: red;

font-weight: bold;

}

**Step 2: Add the Class Using JavaScript**

Inside your **script.js** file:

document.querySelector("h1").classList.add("huge");

- This applies all styles from .huge to the &lt;h1&gt; element.
- Instead of setting multiple .style properties, we achieve the same effect with **one line**.

**4\. Why Use classList Instead of .style?**

| **Direct .style Manipulation** | **Using classList (Best Practice)** |
| --- | --- |
| element.style.color = "red"; | element.classList.add("red-text"); |
| element.style.fontSize = "10rem"; | element.classList.add("huge"); |
| Harder to manage in large projects | Keeps styles in CSS, JavaScript only handles behavior |
| Inline styles override CSS rules | Separates concerns: easier debugging |

**5\. Next Steps**

In the next lesson, we’ll learn how to **manipulate text content** dynamically using JavaScript (e.g., changing innerHTML or textContent). 🚀