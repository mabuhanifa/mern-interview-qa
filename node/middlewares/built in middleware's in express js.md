In Express.js, middleware plays a vital role in handling HTTP requests and responses. Middleware functions are executed sequentially between the initial request and the final response, allowing developers to perform various tasks like authentication, logging, error handling, and more. Express.js provides several built-in middlewares that can be used directly without additional installation. In this explanation, I'll cover the most common built-in middlewares in Express.js, along with examples.

1. **body-parser Middleware:**

   - The `body-parser` middleware is used to parse the incoming request body and extract data from it, such as JSON, URL-encoded, and multipart data.
   - It simplifies handling data sent via HTTP POST requests.

   Example:

   ```javascript
   const express = require("express");
   const bodyParser = require("body-parser");

   const app = express();

   // Parse application/json
   app.use(bodyParser.json());

   // Parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: false }));

   app.post("/api/user", (req, res) => {
     const userData = req.body;
     // Process user data
     res.json(userData);
   });
   ```

2. **cookie-parser Middleware:**

   - The `cookie-parser` middleware is used to parse the cookies sent in the request and populate `req.cookies` with the parsed cookie data.
   - It simplifies handling and reading cookies from the request headers.

   Example:

   ```javascript
   const express = require("express");
   const cookieParser = require("cookie-parser");

   const app = express();

   app.use(cookieParser());

   app.get("/api/visit", (req, res) => {
     const visitCount = req.cookies.visit || 0;
     res.cookie("visit", parseInt(visitCount) + 1);
     res.send(`You have visited this site ${visitCount} times.`);
   });
   ```

3. **express.static Middleware:**

   - The `express.static` middleware serves static files (such as HTML, CSS, images, etc.) from a specified directory.
   - It is useful for serving client-side assets like stylesheets and scripts.

   Example:

   ```javascript
   const express = require("express");

   const app = express();

   // Serve static files from the 'public' directory
   app.use(express.static("public"));

   // Access http://localhost:3000/assets/styles.css to get the stylesheet
   ```

4. **morgan Middleware:**

   - The `morgan` middleware logs information about incoming requests, such as request method, URL, status code, and response time.
   - It helps in monitoring and debugging applications.

   Example:

   ```javascript
   const express = require("express");
   const morgan = require("morgan");

   const app = express();

   // Log incoming requests
   app.use(morgan("combined"));

   app.get("/api/data", (req, res) => {
     res.json({ message: "Data fetched successfully!" });
   });
   ```

5. **error-handler Middleware:**

   - The `error-handler` middleware is used to catch errors that occur during request processing.
   - It helps in centralizing error handling and providing consistent error responses.

   Example:

   ```javascript
   const express = require("express");

   const app = express();

   app.get("/api/user/:id", (req, res, next) => {
     const userId = req.params.id;
     if (isNaN(userId)) {
       const err = new Error("Invalid user ID");
       err.status = 400;
       return next(err);
     }
     // Process valid user ID
     res.json({ userId });
   });

   // Error handling middleware
   app.use((err, req, res, next) => {
     const status = err.status || 500;
     res.status(status).json({ error: err.message });
   });
   ```

6. **express-session Middleware:**

   - The `express-session` middleware manages session data on the server-side and maintains user state between requests.
   - It uses cookies to store a session identifier on the client-side.

   Example:

   ```javascript
   const express = require("express");
   const session = require("express-session");

   const app = express();

   app.use(
     session({
       secret: "your_secret_key",
       resave: false,
       saveUninitialized: true,
     })
   );

   app.get("/api/count", (req, res) => {
     req.session.count = req.session.count || 0;
     req.session.count++;
     res.send(`Session Count: ${req.session.count}`);
   });
   ```

7. **cors Middleware:**

   - The `cors` middleware is used to enable Cross-Origin Resource Sharing (CORS) and handle CORS-related headers in requests and responses.
   - It allows servers to specify which origins have permission to access their resources.

   Example:

   ```javascript
   const express = require("express");
   const cors = require("cors");

   const app = express();

   // Enable CORS for all routes
   app.use(cors());

   app.get("/api/data", (req, res) => {
     res.json({ message: "Data fetched successfully!" });
   });
   ```

8. **helmet Middleware:**

   - The `helmet` middleware is used for setting various HTTP headers to improve the security of the application.
   - It helps in mitigating common security vulnerabilities.

   Example:

   ```javascript
   const express = require("express");
   const helmet = require("helmet");

   const app = express();

   // Enable Helmet middleware
   app.use(helmet());

   app.get("/", (req, res) => {
     res.send("Hello, world!");
   });
   ```

9. **compression Middleware:**

   - The `compression` middleware compresses the response data to reduce the size of the HTTP response.
   - It helps in optimizing the application's performance by reducing bandwidth usage.

   Example:

   ```javascript
   const express = require("express");
   const compression = require("compression");

   const app = express();

   // Enable compression middleware
   app.use(compression());

   app.get("/api/largeData", (req, res) => {
     // Send large data (will be automatically compressed)
     res.json([...Array(10000)].map((_, index) => index + 1));
   });
   ```

10. **express.json Middleware:**

    - The `express.json` middleware is a built-in alternative to the `body-parser` middleware for parsing JSON data from the request body.
    - It parses JSON data and makes it available in `req.body`.

    Example:

    ```javascript
    const express = require("express");

    const app = express();

    // Parse application/json
    app.use(express.json());

    app.post("/api/user", (req, res) => {
      const userData = req.body;
      // Process user data
      res.json(userData);
    });
    ```

11. **express.urlencoded Middleware:**

    - The `express.urlencoded` middleware is a built-in alternative to the `body-parser` middleware for parsing URL-encoded data from the request body.
    - It parses URL-encoded data and makes it available in `req.body`.

    Example:

    ```javascript
    const express = require("express");

    const app = express();

    // Parse application/x-www-form-urlencoded
    app.use;
    ```

(express.urlencoded({ extended: false }));

    app.post('/api/user', (req, res) => {
      const userData = req.body;
      // Process user data
      res.json(userData);
    });
    ```

12. **express.raw Middleware:**

    - The `express.raw` middleware parses raw data from the request body and makes it available in `req.body`.

    Example:

    ```javascript
    const express = require("express");

    const app = express();

    // Parse raw data
    app.use(express.raw());

    app.post("/api/data", (req, res) => {
      const rawData = req.body;
      // Process raw data
      res.send("Data received.");
    });
    ```

13. **express.text Middleware:**

    - The `express.text` middleware parses text data from the request body and makes it available in `req.body`.

    Example:

    ```javascript
    const express = require("express");

    const app = express();

    // Parse text data
    app.use(express.text());

    app.post("/api/data", (req, res) => {
      const textData = req.body;
      // Process text data
      res.send("Text data received.");
    });
    ```

14. **express.Router Middleware:**

    - The `express.Router` middleware allows creating modular and mountable route handlers.
    - It is used to define groups of routes separately and then use them as middleware.

    Example:

    ```javascript
    const express = require("express");

    const app = express();
    const router = express.Router();

    // Define routes for the router
    router.get("/users", (req, res) => {
      res.json({ message: "Get all users" });
    });

    router.post("/users", (req, res) => {
      res.json({ message: "Create a new user" });
    });

    // Mount the router to a specific path
    app.use("/api", router);
    ```

These are some of the most common built-in middlewares in Express.js. They simplify various aspects of handling requests and responses and enable developers to build robust and secure applications. The examples provided demonstrate how to use each middleware to perform specific tasks, such as parsing request data, serving static files, logging requests, and handling errors. Understanding and utilizing these built-in middlewares can significantly enhance the development process and improve the overall performance and security of your Express.js applications.
