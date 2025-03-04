const express = require('express');
const app = express();
const port = 10000

app.get('/', (req, res) => {
  res.send('simple prgram to demonstrate .gitignore');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
