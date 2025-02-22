## 2.4-QR-Code-Project

### Description
The 2.4-QR-Code-Project is a Node.js application that generates QR codes for user-provided URLs. It uses the `express`, `inquirer`, `qr-image`, and `fs` npm packages to create a simple web interface and generate QR codes.

### Installation

#### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)

#### Steps
1. **Create a new directory for your project and copy the files:**
    ```bash
    mkdir qr_code_project
    cp -r /path/to/your/files/* qr_code_project/
    cd qr_code_project
    ```

2. **Install dependencies:**
    ```bash
    npm install
    npm install express fs inquirer qr-image
    ```

### Usage
1. **Start the server:**
    ```bash
    node index.js
    ```

2. **Open your web browser and navigate to:**
    ```
    http://localhost:3000
    ```

3. **Enter the URL you want to generate a QR code for and click "Generate QR Code". The generated QR code will be displayed on the same page.**

### Example Code
Here is the main code for the project:

```javascript
import express from 'express'; // Importing the express library to create the web server
import qr from 'qr-image'; // Importing the qr-image library to generate QR codes

const app = express(); // Initializing the express application
const PORT = process.env.PORT || 3000; // Setting the port for the server, default is 3000

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies

// Route for the main page
app.get('/', (req, res) => {
  res.send(`
    <form action="/generate" method="POST">
      <label for="url">Type in your URL: </label>
      <input type="text" id="url" name="url" required>
      <button type="submit">Generate QR Code</button>
    </form>
  `);
});

// Route to handle QR code generation
app.post('/generate', (req, res) => {
  const url = req.body.url; // Extracting the URL from the request body

  if (!url) {
    return res.status(400).send('URL is required'); // Error handling if the URL is not provided
  }

  try {
    const qr_svg = qr.image(url, { type: 'svg' }); // Generating the QR code in SVG format
    res.type('svg'); // Setting the response type to SVG
    qr_svg.pipe(res); // Piping the generated QR code to the response
  } catch (error) {
    res.status(500).send('Error generating QR code'); // Error handling if QR code generation fails
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging the server start information
});

export default app; // Exporting the express app
```

### Explanation
1. **Importing Libraries:**
   - `express`: This is the web framework used to create the server.
   - `qr-image`: This library is used to generate QR codes from URLs.

2. **Initializing the App:**
   - `const app = express();`: This initializes a new express application.
   - `const PORT = process.env.PORT || 3000;`: This sets the server port, defaulting to 3000 if not specified in environment variables.

3. **Middleware:**
   - `app.use(express.urlencoded({ extended: true }));`: This middleware parses URL-encoded request bodies.
   - `app.use(express.json());`: This middleware parses JSON request bodies.

4. **Routes:**
   - `app.get('/');`: This sets up a GET route for the main page, displaying a simple HTML form where the user can enter a URL.
   - `app.post('/generate');`: This sets up a POST route to handle QR code generation. The user-provided URL is extracted from the request body, and a QR code is generated using the `qr-image` library. The generated QR code is then sent back to the user as an SVG.

5. **Error Handling:**
   - If the URL is not provided in the request body, a 400 status error is returned.
   - If there is an error generating the QR code, a 500 status error is returned.

6. **Starting the Server:**
   - `app.listen(PORT, () => { ... });`: This starts the express server and listens on the specified port.

### Dependencies
The project relies on the following npm packages:
- **express**: A minimal and flexible Node.js web application framework.
- **inquirer**: A collection of common interactive command line user interfaces.
- **qr-image**: A simple QR code generator.
- **fs**: A security-enhanced version of the Node.js file system module.

### License
This project is licensed under the ISC License.

### FAQ
#### How do I install the library?
Follow the installation steps provided above to copy the files and install dependencies.

#### Who maintains this project?
The project is maintained by the course project team. Feel free to reach out via GitHub issues for any questions or concerns.

---
