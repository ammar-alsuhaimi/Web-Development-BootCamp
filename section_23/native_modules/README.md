## Word-Saver Project

### Description
The Word-Saver Project is a Node.js application that allows users to type words and save them temporarily in memory. It uses the `express` and `inquirer` npm packages to create a simple web interface and handle form submissions.

### Installation

#### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)

#### Steps
1. **Create a new directory for your project and copy the files:**
    ```bash
    mkdir word_saver_project
    cp -r /path/to/your/files/* word_saver_project/
    cd word_saver_project
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

### Usage
1. **Start the server:**
    ```bash
    npm start
    ```

2. **Open your web browser and navigate to:**
    ```
    http://localhost:3000
    ```

3. **Enter the words you want to save and click "Submit". The words will be saved temporarily in memory and displayed on the page.**

### Example Code
Here is the main code for the project:

```javascript
import express from 'express'; // Importing the express library to create the web server

const app = express(); // Initializing the express application

// Temporary storage for messages (in-memory)
let messages = [];

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to show the form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="message">Type your message:</label>
      <input type="text" id="message" name="message" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
  const message = req.body.message; // Extracting the message from the request body

  // Store the message in-memory (temporary storage)
  messages.push(message);

  // Send a response to the user
  res.send(`<h1>${message}</h1><p>The message has been saved temporarily!</p>`);
});

// Starting the server
const PORT = process.env.PORT || 3000; // Setting the port for the server, default is 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging the server start information
});

export default app; // Exporting the Express app for Vercel serverless functions
```

### Explanation
1. **Importing Libraries:**
   - `express`: This is the web framework used to create the server.

2. **Initializing the App:**
   - `const app = express();`: This initializes a new express application.

3. **Temporary Storage:**
   - `let messages = [];`: This array is used to store messages temporarily in memory.

4. **Middleware:**
   - `app.use(express.urlencoded({ extended: true }));`: This middleware parses URL-encoded request bodies.
   - `app.use(express.json());`: This middleware parses JSON request bodies.

5. **Routes:**
   - `app.get('/');`: This sets up a GET route for the main page, displaying a simple HTML form where the user can enter a message.
   - `app.post('/submit');`: This sets up a POST route to handle form submissions. The user-provided message is extracted from the request body, stored temporarily in memory, and then displayed back to the user.

6. **Starting the Server:**
   - `const PORT = process.env.PORT || 3000;`: This sets the server port, defaulting to 3000 if not specified in environment variables.
   - `app.listen(PORT, () => { ... });`: This starts the express server and listens on the specified port.

### Dependencies
The project relies on the following npm packages:
- **express**: A minimal and flexible Node.js web application framework.
- **inquirer**: A collection of common interactive command line user interfaces.

### License
This project is licensed under the ISC License.

### FAQ
#### How do I install the library?
Follow the installation steps provided above to copy the files and install dependencies.

#### Who maintains this project?
The project is maintained by the course project team. Feel free to reach out via GitHub issues for any questions or concerns.

---
