In Node.js, built-in middlewares are functions or modules that are part of the Node.js core library and can be used without the need for additional installation. These middlewares are essential for handling various aspects of HTTP requests and responses in a modular and reusable way. In this explanation, we'll cover the most common built-in middlewares in Node.js, along with examples.

1. **http Module:**
   The `http` module is a core module in Node.js that provides functionality to create an HTTP server and handle incoming HTTP requests.

   Example:

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

2. **url Module:**
   The `url` module provides utilities for parsing and formatting URLs. It is often used to extract query parameters from the request URL.

   Example:

   ```javascript
   const http = require("http");
   const url = require("url");

   const server = http.createServer((req, res) => {
     const parsedUrl = url.parse(req.url, true);
     const query = parsedUrl.query;
     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(query));
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

3. **querystring Module:**
   The `querystring` module provides utilities for parsing and formatting URL query strings.

   Example:

   ```javascript
   const http = require("http");
   const querystring = require("querystring");

   const server = http.createServer((req, res) => {
     const query = querystring.parse(req.url.split("?")[1]);
     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(query));
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

4. **fs Module:**
   The `fs` module provides file system-related functionalities, including reading and writing files. Although not a typical middleware, it is often used in Node.js applications to serve static files.

   Example:

   ```javascript
   const http = require("http");
   const fs = require("fs");

   const server = http.createServer((req, res) => {
     fs.readFile("index.html", (err, data) => {
       if (err) {
         res.writeHead(404, { "Content-Type": "text/plain" });
         res.end("File not found");
       } else {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.end(data);
       }
     });
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

5. **os Module:**
   The `os` module provides information about the operating system on which the Node.js process is running. Though not used for HTTP requests directly, it can be helpful in understanding the server's environment.

   Example:

   ```javascript
   const http = require("http");
   const os = require("os");

   const server = http.createServer((req, res) => {
     const osInfo = {
       arch: os.arch(),
       platform: os.platform(),
       totalMemory: os.totalmem(),
       freeMemory: os.freemem(),
     };

     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(osInfo));
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

6. **util Module:**
   The `util` module provides various utility functions that are helpful for debugging and formatting output.

   Example:

   ```javascript
   const http = require("http");
   const util = require("util");

   const server = http.createServer((req, res) => {
     const message = util.format("Hello, %s!", "World");
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end(message);
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

7. **os Module:**
   The `os` module provides information about the operating system on which the Node.js process is running. Though not used for HTTP requests directly, it can be helpful in understanding the server's environment.

   Example:

   ```javascript
   const http = require("http");
   const os = require("os");

   const server = http.createServer((req, res) => {
     const osInfo = {
       arch: os.arch(),
       platform: os.platform(),
       totalMemory: os.totalmem(),
       freeMemory: os.freemem(),
     };

     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(osInfo));
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

8. **zlib Module:**
   The `zlib` module provides compression and decompression functionalities, which can be useful for reducing the size of HTTP responses.

   Example (Compressing a response):

   ```javascript
   const http = require("http");
   const zlib = require("zlib");

   const server = http.createServer((req, res) => {
     const text = "This is some compressed text.";
     zlib.gzip(text, (err, compressedData) => {
       if (err) {
         res.writeHead(500, { "Content-Type": "text/plain" });
         res.end("Error compressing data");
       } else {
         res.writeHead(200, {
           "Content-Type": "text/plain",
           "Content-Encoding": "gzip",
         });
         res.end(compressedData);
       }
     });
   });

   server.listen(3000, () => {
     console.log("Server running on port 3000");
   });
   ```

These are some of the most common built-in modules in Node.js. They provide essential functionalities for handling HTTP requests, parsing URLs, working with the file system, managing operating system information, and more. Understanding these modules and their usage is fundamental to developing robust and efficient Node.js applications.
