import express from "express";
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.send('Hello from express server');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
