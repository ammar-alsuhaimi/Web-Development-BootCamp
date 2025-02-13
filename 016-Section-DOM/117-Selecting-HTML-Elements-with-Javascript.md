
**Selecting HTML Elements in JavaScript**

**1\. Overview**

In this lesson, you learned various methods to select HTML elements using JavaScript. These methods allow you to manipulate elements dynamically, changing their styles or content.

**2\. Methods for Selecting Elements**

**A. getElementsByTagName(tagName)**

- Selects all elements with the given tag name.
- Returns an **HTMLCollection** (array-like object).
- To manipulate a specific element, use indexing (e.g., document.getElementsByTagName("li")\[2\]).

**B. getElementsByClassName(className)**

- Selects all elements with the given class name.
- Also returns an **HTMLCollection** (array-like).
- Even if only one element has the class, it must be accessed via indexing (e.g., document.getElementsByClassName("btn")\[0\]).

**C. getElementById(id)**

- Selects a **single** element with the given ID.
- Returns a single **element** (not an array).
- Example: document.getElementById("title").innerHTML = "Good Bye";.

**3\. querySelector and querySelectorAll**

**A. querySelector(selector)**

- Selects **the first matching element** based on a **CSS selector**.
- Can be used for elements ("h1"), classes (".btn"), or IDs ("#title").
- Supports **complex selectors** (e.g., document.querySelector("li a") selects an anchor inside a list item).

**B. querySelectorAll(selector)**

- Selects **all matching elements** based on a **CSS selector**.
- Returns a **NodeList** (array-like object).
- To manipulate elements, use indexing (e.g., document.querySelectorAll(".item")\[0\]).

**4\. Choosing the Best Method**

- querySelector and querySelectorAll are **more flexible** and commonly used.
- getElementById is best when targeting **a single unique element**.
- getElementsByTagName and getElementsByClassName are **less commonly used** in modern JavaScript since they return **HTMLCollections** rather than NodeLists.

**5\. Challenge Solution**

**Task:** Change the color of a Google link inside a list item.  
**Solution:**

document.querySelector("li a").style.color = "red";

This ensures that the anchor tag inside the li is selected, not just the list item itself.
