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
