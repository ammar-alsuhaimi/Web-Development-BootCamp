```markdown
# Exploring Native Node.js Modules

In the previous lesson, we developed a basic Node.js application that utilized `console.log()` to output text. In this lesson, we'll explore how to harness Node.js's native modules to enhance our applications beyond standard JavaScript capabilities.

## Understanding Native Node.js Modules

Native Node.js modules are built-in tools that simplify server-side application development. They provide functionalities such as:

- **File Access**: Reading from and writing to the local file system, whether on your personal computer or a server.
- **Networking**: Facilitating internet communications essential for backend operations.

These modules are akin to pre-installed utilities in an operating system, offering foundational features to streamline development.

For a comprehensive list of native modules, refer to the [Node.js documentation](https://nodejs.org/api/). While numerous, we'll focus on key modules like `http` and `path` in future lessons. Currently, let's delve into the `fs` (File System) module.

## The File System Module

Unlike browser-based JavaScript, which restricts file system access for security reasons, Node.js allows interaction with the server's file system. This capability enables reading from and writing to files on the server.

To utilize the File System module, we can incorporate it into our project using the CommonJS `require` syntax:

```javascript
const fs = require('fs');
```

This line imports the `fs` module, granting access to its methods.

### Writing to a File

To create and write to a file, we can use the `fs.writeFile()` method. This method requires the file name, data to write, and a callback function to handle errors or confirm successful execution.

```javascript
const fs = require('fs');

fs.writeFile('message.txt', 'Hello from Node.js!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});
```

Executing this script will create a `message.txt` file containing the text "Hello from Node.js!".

### Reading from a File

To read the contents of a file, we can use the `fs.readFile()` method. It's essential to specify the correct encoding to ensure the data is interpreted as text.

```javascript
const fs = require('fs');

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

This script reads the content of `message.txt` and logs it to the console.

## Challenge

Modify the `message.txt` file to include your name (e.g., "Hello from [Your Name]!"). Then, write a Node.js script that reads this file and outputs its content to the terminal.

For more detailed information on the `fs` module and its capabilities, consult the [Node.js File System documentation](https://nodejs.org/api/fs.html).

In the next lesson, we'll explore the Node Package Manager (npm) and how it can further extend the functionality of your Node.js applications.
```

