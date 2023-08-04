Node.js is a popular server-side JavaScript runtime environment that allows developers to build scalable and high-performance applications. Node.js follows an event-driven, non-blocking I/O model, making it suitable for real-time applications and handling concurrent connections efficiently. In this article, we will explore the concept of "Server" and "Core Modules" in Node.js along with practical examples.

## Server in Node.js:

In Node.js, a server is a computer program that listens for incoming network requests and responds to them accordingly. It can serve web pages, handle API requests, or even act as a proxy server. A Node.js server can be created using the built-in HTTP or HTTPS modules. Let's start by creating a basic HTTP server using Node.js:

```javascript
// Import the HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write the response
  res.end("Hello, World!");
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this example, we import the `http` module, which is one of the core modules in Node.js. We use the `http.createServer()` method to create an HTTP server. The callback function inside `createServer()` is executed whenever a new request is received by the server. It takes two parameters: `req` (request) and `res` (response). We set the response header to indicate the content type as plain text and send the "Hello, World!" message to the client.

To run this example, save the code in a file (e.g., `server.js`) and execute it with Node.js:

```
node server.js
```

Now, open a web browser and navigate to `http://localhost:3000`. You should see the "Hello, World!" message displayed.

## Core Modules in Node.js:

Core modules in Node.js are pre-installed and do not require any additional installation. They provide essential functionalities to work with file systems, network communication, cryptography, and more. Node.js has several core modules, including:

1. `fs` (File System): The `fs` module allows you to work with the file system to read, write, and manipulate files. Here's an example of reading a file:

```javascript
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

2. `path`: The `path` module provides utilities for working with file and directory paths. For example:

```javascript
const path = require("path");

const filePath = "/user/documents/index.html";
const extname = path.extname(filePath); // Returns '.html'
const basename = path.basename(filePath); // Returns 'index.html'
const dirname = path.dirname(filePath); // Returns '/user/documents'
```

3. `http` and `https`: These modules are used to create web servers and make HTTP/HTTPS requests, as demonstrated in the server example earlier.

4. `os` (Operating System): The `os` module provides information about the operating system on which Node.js is running. For instance:

```javascript
const os = require("os");

console.log("Total memory:", os.totalmem());
console.log("Free memory:", os.freemem());
console.log("Number of CPUs:", os.cpus().length);
```

5. `events`: The `events` module allows you to create and handle custom events in Node.js applications. Here's a simple event emitter example:

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("customEvent", (arg) => {
  console.log("Custom event triggered with argument:", arg);
});

emitter.emit("customEvent", "Hello, Event!"); // Output: Custom event triggered with argument: Hello, Event!
```

6. `crypto`: The `crypto` module provides cryptographic functionalities, such as hashing, encryption, and decryption. Here's an example of hashing a string using SHA-256:

```javascript
const crypto = require("crypto");

const data = "Hello, Crypto!";
const hash = crypto.createHash("sha256").update(data).digest("hex");
console.log("SHA-256 Hash:", hash);
```

These are just a few examples of core modules available in Node.js. You can explore more modules and their functionalities in the official Node.js documentation.

In conclusion, Node.js provides a straightforward way to create servers and handle network requests using the built-in HTTP/HTTPS modules. Additionally, core modules offer a wide range of utilities to interact with the file system, work with operating system information, handle events, and perform cryptographic operations. Node.js's extensive module ecosystem, combined with its event-driven architecture, makes it a powerful platform for building scalable and efficient server-side applications.
