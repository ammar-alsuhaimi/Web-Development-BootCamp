In this lesson, we'll build a **QR Code Generator** using Node.js. This application will prompt the user for a URL, generate a corresponding QR code image, and save both the image and the URL to the local file system. To achieve this, we'll utilize two npm packages: `inquirer` for capturing user input and `qrcode` for generating QR codes.

**Prerequisites:**

- Ensure you have [Node.js](https://nodejs.org/) installed on your system.

**Project Setup:**

1. **Initialize the Project:**

   Begin by creating a new directory for your project and initializing it with npm:

   ```bash
   mkdir qr-code-generator
   cd qr-code-generator
   npm init -y
   ```

2. **Install Required Packages:**

   Install the `inquirer` and `qrcode` packages:

   ```bash
   npm install inquirer qrcode
   ```

**Building the Application:**

1. **Import Necessary Modules:**

   Create an `index.js` file and import the required modules:

   ```javascript
   import inquirer from 'inquirer';
   import QRCode from 'qrcode';
   import fs from 'fs';
   ```

2. **Prompt User for URL:**

   Use `inquirer` to prompt the user to input a URL:

   ```javascript
   const promptUser = async () => {
     const answers = await inquirer.prompt([
       {
         name: 'url',
         message: 'Enter the URL you want to convert to a QR code:',
         type: 'input',
         validate: (input) => {
           if (!input) {
             return 'URL cannot be empty. Please enter a valid URL.';
           }
           return true;
         },
       },
     ]);
     return answers.url;
   };
   ```

3. **Generate QR Code and Save Files:**

   Generate the QR code and save both the image and the URL to the local file system:

   ```javascript
   const generateQRCode = async (url) => {
     try {
       // Generate QR code and save as PNG
       await QRCode.toFile('qrcode.png', url);
       console.log('QR code image saved as qrcode.png');

       // Save the URL to a text file
       fs.writeFileSync('url.txt', url);
       console.log('URL saved in url.txt');
     } catch (error) {
       console.error('Error generating QR code:', error);
     }
   };
   ```

4. **Execute the Application:**

   Combine the functions to run the application:

   ```javascript
   const run = async () => {
     const url = await promptUser();
     await generateQRCode(url);
   };

   run();
   ```

**Running the Application:**

Execute the application using Node.js:

```bash
node index.js
```

The application will prompt you to enter a URL, generate a QR code image named `qrcode.png`, and save the URL in a file named `url.txt` in the same directory.

**Conclusion:**

By following this guide, you've created a Node.js application that generates QR codes from user-provided URLs and saves both the QR code image and the URL locally. This project demonstrates how to capture user input and handle file operations in Node.js.

For more information on the packages used:

- [Inquirer.js Documentation](https://www.npmjs.com/package/inquirer)
- [qrcode Package Documentation](https://www.npmjs.com/package/qrcode)

Happy coding! 