# 2.4-QR-Code-Project

## Description
The 2.4-QR-Code-Project is a Node.js application that generates QR codes for user-provided URLs. 

It uses the `express`, `inquirer`, `qr-image`, and `fs` npm packages to create a simple web interface and generate QR codes.

## Installation

### Prerequisites
- Node.js (v14 or above)
- npm (v6 or above)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/ammar-alsuhaimi/qr_code_project.git
    ```
2. Navigate into the project directory:
    ```bash
    cd npm
    ```
3. Install dependencies:
    ```bash
    npm install
    npm install express fs inquirer qr-image
    ```

## Usage
1. Start the server:
    ```bash
    node index.js
    ```

2. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

3. Enter the URL you want to generate a QR code for and click "Generate QR Code". The generated QR code will be displayed on the same page.

## Example Code
Here is the main code for the project:

```javascript
import express from 'express';
import qr from 'qr-image';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <form action="/generate" method="POST">
      <label for="url">Type in your URL: </label>
      <input type="text" id="url" name="url" required>
      <button type="submit">Generate QR Code</button>
    </form>
  `);
});

app.post('/generate', (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const qr_svg = qr.image(url, { type: 'svg' });
    res.type('svg');
    qr_svg.pipe(res);
  } catch (error) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
```

## Dependencies
The project relies on the following npm packages:
- **express**: A minimal and flexible Node.js web application framework.
- **inquirer**: A collection of common interactive command line user interfaces.
- **qr-image**: A simple QR code generator.
- **fs**: A security-enhanced version of the Node.js file system module.

## License
This project is licensed under the ISC License.

## FAQ
### How do I install the library?
Follow the installation steps provided above to clone the repository and install dependencies.

### Who maintains this project?
The project is maintained by the course project team. Feel free to reach out via GitHub issues for any questions or concerns.



