Reading and writing files is a common task in Node.js and Express.js applications. In this guide, I'll walk you through the process of reading and writing files in raw Node.js and Express.js without relying on any third-party packages. We'll cover various file operations, including reading, writing, appending, and deleting files.

Before we proceed, let's briefly understand the basic concepts related to file handling in Node.js:

1. File System Module:
   Node.js provides a built-in `fs` module that allows you to interact with the file system. It includes methods for file operations like reading, writing, appending, and deleting files. To use this module, you need to import it using the `require` statement:

```javascript
const fs = require("fs");
```

2. Synchronous vs. Asynchronous File Operations:
   The `fs` module offers both synchronous and asynchronous methods for file operations. The synchronous methods block the execution until the operation is complete, while asynchronous methods do not block and use callbacks or Promises to handle results.

3. File Paths:
   When working with files, you need to provide the correct file paths. Node.js uses a relative or absolute path to locate files. Relative paths are relative to the current working directory, while absolute paths start from the root of the file system.

Now, let's dive into various file operations using raw Node.js and Express.js:

## Table of Contents:

1. **Reading Files**

   - Synchronous File Read
   - Asynchronous File Read

2. **Writing Files**

   - Synchronous File Write
   - Asynchronous File Write

3. **Appending to Files**

   - Synchronous File Append
   - Asynchronous File Append

4. **Deleting Files**

   - Synchronous File Delete
   - Asynchronous File Delete

5. **Using Express.js for File Operations**
   - Building an Express.js Server
   - Handling File Uploads
   - Downloading Files

### 1. Reading Files:

#### Synchronous File Read:

To read a file synchronously, use the `fs.readFileSync()` method. This method returns the contents of the file as a buffer or a specified encoding.

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("path/to/file.txt", "utf8");
  console.log(data);
} catch (error) {
  console.error("Error reading file:", error);
}
```

#### Asynchronous File Read:

For non-blocking file reads, use the `fs.readFile()` method. Provide a callback function that will be executed once the file read is complete.

```javascript
const fs = require("fs");

fs.readFile("path/to/file.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
  } else {
    console.log(data);
  }
});
```

### 2. Writing Files:

#### Synchronous File Write:

To write data synchronously to a file, use the `fs.writeFileSync()` method. Be aware that this method will overwrite the file if it already exists.

```javascript
const fs = require("fs");

try {
  fs.writeFileSync("path/to/file.txt", "Hello, World!", "utf8");
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing file:", error);
}
```

#### Asynchronous File Write:

For non-blocking file writes, use the `fs.writeFile()` method along with a callback function.

```javascript
const fs = require("fs");

fs.writeFile("path/to/file.txt", "Hello, World!", "utf8", (error) => {
  if (error) {
    console.error("Error writing file:", error);
  } else {
    console.log("File written successfully.");
  }
});
```

### 3. Appending to Files:

#### Synchronous File Append:

To append data synchronously to a file, use the `fs.appendFileSync()` method.

```javascript
const fs = require("fs");

try {
  fs.appendFileSync("path/to/file.txt", "\nNew data to append.", "utf8");
  console.log("Data appended successfully.");
} catch (error) {
  console.error("Error appending data:", error);
}
```

#### Asynchronous File Append:

For non-blocking file appends, use the `fs.appendFile()` method along with a callback function.

```javascript
const fs = require("fs");

fs.appendFile("path/to/file.txt", "\nNew data to append.", "utf8", (error) => {
  if (error) {
    console.error("Error appending data:", error);
  } else {
    console.log("Data appended successfully.");
  }
});
```

### 4. Deleting Files:

#### Synchronous File Delete:

To delete a file synchronously, use the `fs.unlinkSync()` method.

```javascript
const fs = require("fs");

try {
  fs.unlinkSync("path/to/file.txt");
  console.log("File deleted successfully.");
} catch (error) {
  console.error("Error deleting file:", error);
}
```

#### Asynchronous File Delete:

For non-blocking file deletes, use the `fs.unlink()` method along with a callback function.

```javascript
const fs = require("fs");

fs.unlink("path/to/file.txt", (error) => {
  if (error) {
    console.error("Error deleting file:", error);
  } else {
    console.log("File deleted successfully.");
  }
});
```

### 5. Using Express.js for File Operations:

Now, let's integrate file operations with an Express.js server.

#### Building an Express.js Server:

First, install Express.js:

```bash
npm install express
```

```javascript
// app.js (or index.js)
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

#### Handling File Uploads:

In this example, we'll create an endpoint that handles file uploads using a simple HTML form.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <body>
    <h2>File Upload</h2>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <input type="submit" value="Upload" />
    </form>
  </body>
</html>
```

```javascript
// app.js (or index.js)
// ... (previous code)

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", (req, res) => {
  const file = req.files.file;
  const filePath = __dirname + "/uploads/" + file.name;

  file.mv(filePath, (error) => {
    if (error) {
      console.error("Error uploading file:", error);
      res.status(500).send("Error uploading file.");
    } else {
      console.log("File uploaded successfully.");
      res.send("File uploaded successfully.");
    }
  });
});
```

#### Downloading Files:

Now, let's create an endpoint to download files from the server.

```javascript
// app.js (or index.js)
// ... (previous code)

app.get("/download/:filename", (req, res) => {
  const filePath = __dirname + "/uploads/" + req.params.filename;

  fs.access(filePath, fs.constants.R_OK, (error) => {
    if (error) {
      console.error("Error accessing file:", error);
      res.status(404).send("File not found.");
    } else {
      res.download(filePath, req.params.filename);
    }
  });
});
```

With this setup, you can now upload files using the form and download them from the server.

### Conclusion:

In this guide, we covered various file operations in raw Node.js and integrated them with an Express.js server for handling file uploads and downloads. Remember to handle errors gracefully and ensure proper security measures when dealing with user-uploaded files. While this guide covered the basics of file handling in Node.js and Express.js, there are many more advanced techniques and considerations to explore as your application requirements grow. Happy coding!
