# Express.js Hello World

This is a simple Express.js application that sets up a web server and responds with "Hello from Node!" when the root URL is accessed.

## Requirements

- Node.js (v14 or higher)

## Installation

1. Copy the files from the provided source.

2. Navigate to the project directory:

```bash
cd <project_directory>
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000` (or the port defined in your environment variables).

## Code Explanation

```javascript
import express from 'express'; // Use ES module syntax for import

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

- **Import Express**: The application uses Express.js for setting up the server.
- **Create an Express App**: An instance of the Express application is created.
- **Define the Port**: The application listens on the port defined in the environment variable `PORT` or defaults to `3000`.
- **Handle Root Request**: When a GET request is made to the root URL (`/`), the server responds with the message "Hello from Node!".
- **Start the Server**: The application listens for incoming requests on the specified port and logs a message when the server is running.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
