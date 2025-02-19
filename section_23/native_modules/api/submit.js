import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;

    fs.writeFile('message.txt', message, (err) => {
      if (err) {
        res.status(500).json({ error: 'Failed to save message' });
        return;
      }
      res.json({ message: `Message saved: ${message}` });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
