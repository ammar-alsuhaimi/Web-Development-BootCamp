### Lesson Overview: HTTP Requests and Using Postman

1. **Introduction to HTTP Communication**
   - **Client-Side and Server-Side**: The client-side is the device (e.g., desktop, laptop, or mobile) that a user uses to interact with a website. The server-side is the application running on a server (e.g., `index.js`) and the database.
   - **HTTP Requests**: Communication between the client-side and server-side is done using HTTP requests, where the client sends requests and the server sends back responses.

2. **HTTP Response Codes**
   - **Categories of HTTP Status Codes**:
     - **1xx (Informational)**: Request is in process.
     - **2xx (Success)**: The request was successful (e.g., **200 OK**, **201 Created**).
     - **3xx (Redirection)**: Redirect to another URL (e.g., **301 Moved Permanently**).
     - **4xx (Client Error)**: Something is wrong with the request from the client (e.g., **404 Not Found**).
     - **5xx (Server Error)**: Something is wrong on the server side (e.g., **500 Internal Server Error**).
   
   - **Common Codes**:
     - **200 OK**: Everything went fine.
     - **201 Created**: Successful creation of a resource.
     - **301 Moved Permanently**: Redirect to a new URL.
     - **404 Not Found**: The resource could not be found.
     - **500 Internal Server Error**: Server has an issue.

3. **HTTP Methods (Request Types)**
   - **GET**: Used to retrieve information from the server.
   - **POST**: Used to send data to the server, usually to create a new resource (e.g., registering a user).
   - **PUT**: Used to update or replace a resource.
   - **PATCH**: Used for partial updates to a resource.
   - **DELETE**: Used to remove a resource.

4. **Using Postman to Test HTTP Requests**
   - **What is Postman?**
     - Postman is a tool for testing HTTP requests and responses. It allows developers to simulate sending different HTTP methods without needing a full front-end.
   - **Setting Up Requests in Postman**:
     - You can select the HTTP method (GET, POST, PUT, PATCH, DELETE), input the target URL, and add any necessary request body (e.g., form data).
   
5. **Hands-On Exercise: Testing with Postman**
   - **Setting Up Postman for Testing**:
     1. Download the zipped file (e.g., `3.3 Postman`) from the lesson.
     2. Extract and install the required dependencies with `npm install`.
     3. Use **Nodemon** to start the server.
   
   - **Test Each HTTP Method**:
     1. **GET Request**:
        - Test the root endpoint (`/`).
        - Expected status code: **200 OK**.
     2. **POST Request**:
        - Test the register endpoint (`/register`).
        - Add form data (e.g., name, email).
        - Expected status code: **201 Created**.
     3. **PUT Request**:
        - Test updating a user (e.g., `/user/angela`).
        - Expected status code: **200 OK**.
     4. **PATCH Request**:
        - Test partially updating a user (e.g., change first name).
        - Expected status code: **200 OK**.
     5. **DELETE Request**:
        - Test deleting a user (e.g., `/user/angela`).
        - Expected status code: **200 OK** (or another appropriate status code depending on the server's implementation).

6. **Conclusion**
   - Understanding HTTP Status Codes and Methods is crucial for web development.
   - Postman is an essential tool for testing APIs and HTTP requests before building the front-end.
   - In the next lesson, the focus will be on **Express Middleware** and how to access request data on the back-end.

---

