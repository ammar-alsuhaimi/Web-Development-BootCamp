import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Temporary storage for messages (in-memory)
let messages = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="message">Type your message:</label>
      <input type="text" id="message" name="message" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const message = req.body.message;

  // Store message in-memory (temporary)
  messages.push
});
