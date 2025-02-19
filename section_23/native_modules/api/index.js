import express from 'express';

const app = express();

// Temporary storage for messages (in-memory)
let messages = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  const message = req.body.message;

  // Store the message in-memory (temporary storage)
  messages.push(message);

  // Send a response to the user
  res.send(`<h1>${message}</h1><p>The message has been saved temporarily!</p>`);
});

// Export the Express app for Vercel serverless functions
export default app;
