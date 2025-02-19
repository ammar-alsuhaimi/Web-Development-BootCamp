import express from 'express';
import fs from 'fs';
import inquirer from 'inquirer';

const app = express();
const PORT = process.env.PORT || 3000;

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

  fs.writeFile('message.txt', message, (err) => {
    if (err) throw err;
    res.send(`<h1>${message}</h1><p>The message has been saved!</p>`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
