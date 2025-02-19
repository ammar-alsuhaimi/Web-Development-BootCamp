
/* THIS IS THE PROGRAM THAT HAVE FROM THE COURSE.

1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/*
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    }

  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("URL.txt", url, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  */


// THIS IS THE PROGRAM THAT I HAVE CREATED. TO MAKE IT WORK BETTER TO INTERACTIVE WITH THE USER.

import express from 'express';
import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';

const app = express();
const PORT = process.env.PORT || 3000;

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
  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr_img.png'));

  fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    res.send('The QR code and URL file have been saved!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
