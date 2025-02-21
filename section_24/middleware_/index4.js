import express from 'express';
import bodyParser from 'body-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files (CSS, JS, images)

// Band Name Generator Middleware (only applied to "/submit" route)
const bandNameGenerator = (req, res, next) => {
  if (!req.body.street || !req.body.pet) {
    return res.status(400).send('<h1>Error: Please provide both street and pet names!</h1>');
  }
  req.bandName = req.body.street + req.body.pet; // Attach to request object
  next();
};

// Routes
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

router.post('/submit', bandNameGenerator, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName} ✌️</h2>`);
});

// Use router
app.use('/', router);

app.use((req, res, next) => {
  console.log(`Request path: ${req.path}`);
  next();
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
