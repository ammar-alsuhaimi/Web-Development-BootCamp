const express = require('express'); // Use CommonJS require

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
