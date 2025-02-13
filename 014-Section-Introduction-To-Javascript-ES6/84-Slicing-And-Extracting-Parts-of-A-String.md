**Using slice() to Limit Tweet Length**

**1\. What is slice()?**

- The slice() function in JavaScript allows you to extract a section of a string. You provide two numbers:
  - **Start position** (inclusive).
  - **End position** (exclusive).
- The syntax is: string.slice(start, end)

**2\. Basic Usage of slice()**

- If we have the string "Angela", we can extract different parts:
- var name = "Angela";
- console.log(name.slice(0, 1)); // "A" (first character)
- console.log(name.slice(1, 3)); // "ng" (characters from position 1 to 3)
- console.log(name.slice(2, 6)); // "gel" (characters from position 2 to 6)
- **Important:** The positions are zero-based (0 is the first character), so the last character’s position is length - 1.

**3\. Challenge: Limiting Tweet Length to 140 Characters**

- **Goal:** Create a program that allows the user to enter a tweet and ensures the tweet doesn't exceed 140 characters by cutting it off.
- Steps:
    1. **Prompt the user** to enter the tweet.
    2. **Slice the string** to keep only the first 140 characters.
    3. **Display the result** to the user.
- **Solution:**
- var tweet = prompt("Compose your tweet");
- var tweetUnder140 = tweet.slice(0, 140);
- alert(tweetUnder140);
    1. Here, slice(0, 140) extracts the first 140 characters.

**4\. Optimized Solution**

- You can simplify the code by removing the intermediate variable:
- alert(prompt("Compose your tweet").slice(0, 140));
  - This directly prompts for the tweet and slices it in one step, then alerts the result.

**5\. Why Use slice()?**

- slice() helps in limiting the length of strings, ensuring that any input (e.g., tweets or messages) adheres to a character limit. This is useful for applications like social media platforms where messages need to stay within certain lengths.

**Key Takeaways:**

- **slice()** is great for extracting portions of a string.
- You can **easily limit text input** using slice() to ensure it doesn't exceed a specific length.
- **Optimized code** reduces complexity without sacrificing functionality.

