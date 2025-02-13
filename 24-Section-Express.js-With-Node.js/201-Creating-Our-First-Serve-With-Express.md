# Building an Express Server with Node.js

## Introduction

In this lesson, we will build our own Express server using **Express** and **Node.js**. Before diving into the code, let's revisit some key backend concepts.

## What is the Backend?

The **backend** consists of the following components:
1. **Server** - A computer (often powerful and always on) that listens for incoming requests and responds with resources such as HTML, CSS, and JavaScript.
2. **Application** - A program running on the server, often written in JavaScript using **Node.js**.
3. **Database** - Stores data such as user information or company details. For simple applications, a database may not be necessary.

When a user (client) accesses a website by entering a URL like `google.com`, a request is sent to Google's servers. The server processes the request and returns the appropriate web page.

## Client-Side vs Server-Side

- **Client-Side (Frontend)**: The part of the website the user interacts with.
- **Server-Side (Backend)**: The logic and database operations happening behind the scenes.

In this lesson, we will build our backend server using **Express.js**, a Node.js framework that simplifies server creation.

## Steps to Create an Express Server

### Step 1: Create a Project Directory
1. Open **VS Code**.
2. Navigate to your **Web Development Project** folder.
3. Open the terminal (View > Terminal).
4. Use `cd` to navigate to your **Backend** folder.
5. Create a new directory using:
   ```sh
   mkdir "3.1 Express Server"
   ```
6. Navigate into this directory:
   ```sh
   cd "3.1 Express Server"
   ```

### Step 2: Create an `index.js` File
Run the following command to create a new JavaScript file:
```sh
  touch index.js
```

### Step 3: Initialize NPM and Install Express
1. Initialize an NPM project with:
   ```sh
   npm init -y
   ```
   This generates a `package.json` file.
2. Install Express:
   ```sh
   npm install express
   ```
   This installs the Express package and creates a `node_modules` folder containing dependencies.
3. Modify `package.json` to use ES6 modules by adding this line:
   ```json
   "type": "module"
   ```

### Step 4: Write the Server Code
Open `index.js` and write the following code:
```js
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
```

### Step 5: Start the Server
Run the following command in the terminal:
```sh
  node index.js
```
If successful, you should see:
```
Server running on port 3000.
```

### Step 6: Access the Server
1. Open a browser and go to:
   ```
   http://localhost:3000
   ```
2. You may see an error:
   ```
   Cannot GET /
   ```
   This means our server is running but does not have a route defined to handle the request.

## Understanding Ports
- **Localhost (`127.0.0.1`)** refers to your own computer acting as a server.
- **Port 3000** is the "door" through which our application listens for requests.
- Different applications and services use different ports (e.g., printers, remote controls, web servers).

To view active ports, use:
- **Mac/Linux:**
  ```sh
  sudo lsof -i -P -n | grep LISTEN
  ```
- **Windows:**
  ```sh
  netstat -ano | findstr "LISTENING"
  ```

## Conclusion
We have successfully:
- Set up an Express server.
- Initialized NPM and installed dependencies.
- Written and started a simple server.
- Learned about ports and localhost.

In the next lesson, we will explore **handling requests** and **responding with content** using Express. Stay tuned!

