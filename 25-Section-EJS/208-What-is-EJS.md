### 1. **Why Use EJS?**
   - **Separation of Concerns**: The main reason to use a templating engine like EJS is to separate the logic of your web application from the content and presentation (HTML and CSS). In plain JavaScript, you'd typically have to concatenate strings to inject dynamic data directly into HTML, but this can quickly get messy. EJS allows you to keep your HTML structure clean while still injecting dynamic content.
   
   - **Dynamic Content Rendering**: Without EJS (or a similar templating engine), you might end up using JavaScript to directly manipulate the HTML (via `document.querySelector` or `innerHTML`), which gets cumbersome as your project grows. With EJS, you can render dynamic content directly from the server and keep your HTML files organized, avoiding complex string concatenation.

### 2. **How Does EJS Work?**
   - **Basic Syntax**: 
     - In a `.ejs` file, you can embed JavaScript code inside HTML using special `<% %>` tags.
     - To output the result of an expression into the HTML, you use `<%= %>`. This allows data from the server (like a variable, result of a function, etc.) to be injected directly into the HTML file.
     
     For example:
     ```html
     <h1>Hello, <%= name %>!</h1>
     ```
     Here, `<%= name %>` will output the value of the `name` variable passed from the server.

   - **Server Side Rendering**: When a client requests a route (e.g., the homepage), the server sends back an HTML page, but with the dynamic content filled in by EJS based on data passed from the backend (your Express app).

### 3. **Setting Up the Project**
   - **Install Dependencies**: You need to install `express` (for your server) and `ejs` (for templating):
     ```bash
     npm install express ejs
     ```

   - **Create File Structure**:
     - Your basic folder structure for this project might look like this:
       ```
       /4.0 EJS
         /views
           index.ejs
         index.js
       ```

   - **Set Up the Express Server**:
     - You use `express` to set up a basic server. For example, in `index.js`:
       ```js
       import express from "express";
       const app = express();
       const port = 3000;

       app.set('view engine', 'ejs');  // Set EJS as the templating engine
       app.use(express.static("public"));  // Serve static files from the 'public' folder

       app.listen(port, () => {
         console.log(`Server running on port ${port}`);
       });
       ```

     - **Set View Engine**: `app.set('view engine', 'ejs')` tells Express to use EJS to render the views (i.e., `.ejs` files) in the `/views` folder.

### 4. **Rendering Dynamic Data with EJS**
   - The dynamic content is passed from the backend to the EJS template using `res.render()`. Here's the syntax for passing data:
     ```js
     app.get("/", (req, res) => {
       const dayType = "weekday";  // Example dynamic data
       const advice = "Time to work hard!";
       res.render("index", { dayType, advice });
     });
     ```

   - **In EJS Template**: Inside the `index.ejs` file, you reference the passed data using `<%= %>`. For example:
     ```html
     <h1>Hey, it's a <%= dayType %>! <%= advice %></h1>
     ```

   - The server sends the dynamic data (`dayType` and `advice`) to the `index.ejs` file. When the client visits the homepage, the EJS template is rendered, and the values for `dayType` and `advice` will be inserted into the HTML.

### 5. **Adding Dynamic Logic**
   - In your application, you want the advice and greeting to change based on whether it's a weekday or the weekend. You can do this with JavaScript’s `Date()` object and the `getDay()` method.

     ```js
     const today = new Date();  // Current date
     const day = today.getDay();  // Get the day of the week (0 for Sunday, 6 for Saturday)
     let dayType = "weekday";  // Default to weekday
     let advice = "Time to work hard!";  // Default advice

     if (day === 0 || day === 6) {  // If it's Sunday (0) or Saturday (6)
       dayType = "weekend";
       advice = "Time to have some fun!";
     }
     ```

     You then pass these values to the EJS template via `res.render()`:
     ```js
     res.render("index", { dayType, advice });
     ```

### 6. **Complete Example:**
   - **`index.js`** (Server Side):
     ```js
     import express from "express";
     const app = express();
     const port = 3000;

     app.set('view engine', 'ejs');
     app.use(express.static("public"));

     app.get("/", (req, res) => {
       const today = new Date();
       const day = today.getDay();
       let dayType = "weekday";
       let advice = "Time to work hard!";

       if (day === 0 || day === 6) {  // Check for weekend (Saturday or Sunday)
         dayType = "weekend";
         advice = "Time to have some fun!";
       }

       res.render("index", { dayType, advice });  // Render the EJS template with dynamic data
     });

     app.listen(port, () => {
       console.log(`Server running on port ${port}`);
     });
     ```

   - **`index.ejs`** (Template):
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Weekday Warrior</title>
       </head>
       <body>
         <h1>Hey, it's a <%= dayType %>! <%= advice %></h1>
       </body>
     </html>
     ```

### 7. **Testing the Application**
   - Start the server:
     ```bash
     node index.js
     ```
   - Visit `http://localhost:3000` in your browser, and you should see the greeting and advice based on whether it's a weekday or the weekend.

### 8. **What’s Next?**
   - Now that you've learned the basics of EJS, you can apply this to larger applications where you render dynamic lists, user data, or content fetched from a database.
   - **Advanced EJS**: Learn more advanced features like including partials (e.g., headers, footers), looping through arrays, and conditionally rendering elements.

EJS helps you generate dynamic content on the server side and render it in the browser, making it essential for applications that need to display data-driven content while keeping the code clean and maintainable.

