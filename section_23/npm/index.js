import express from 'express';
import { randomSuperhero } from 'superheroes';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const mySuperHeroName = randomSuperhero();
  res.send(`I am ${mySuperHeroName}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for Vercel
export default app;
