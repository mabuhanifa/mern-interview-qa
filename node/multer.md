Handling file uploads in Node.js can be achieved using various libraries, and one of the popular ones is `Multer`. Multer is a middleware designed for handling `multipart/form-data`, which is typically used when uploading files through HTML forms.

Here's a step-by-step guide on how to handle file uploads in Node.js using Multer:

1. Install the required packages:
   First, make sure you have Node.js and npm (Node Package Manager) installed. Create a new Node.js project or navigate to your existing project's directory and run the following command to install the necessary packages:

```bash
npm install express multer
```

2. Set up the server:
   Create a Node.js file (e.g., `app.js` or `server.js`) and set up an Express server. Import the required modules and set up the server as follows:

```javascript
const express = require("express");
const multer = require("multer");

const app = express();
const port = 3000; // Replace with your desired port number

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder where the files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const upload = multer({ storage: storage });

// Your routes and other middleware configurations go here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

3. Create the file upload route:
   Next, create a route that handles the file upload. For instance, you might want to handle a file upload when a POST request is made to a specific endpoint:

```javascript
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
});
```

In this example, we're using the `upload.single()` middleware from Multer to handle a single file upload. The parameter `'file'` is the name of the field in the form where the file is being uploaded. You should adjust this to match the field name in your HTML form.

4. Create an HTML form for file upload:
   Create an HTML form in your front-end to allow users to upload files. The form should have an input field with the attribute `type="file"` and the appropriate `enctype` attribute set to `multipart/form-data`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>File Upload Example</title>
  </head>
  <body>
    <h1>File Upload</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  </body>
</html>
```

5. Start the server:
   Run the Node.js server by executing the following command:

```bash
node app.js
```

Now, when you visit your front-end application (HTML form), you should be able to select a file and upload it. The file will be saved in the specified destination folder, and the server will respond with a success message along with the filename.

Remember to handle file size limitations, file type restrictions, and other security concerns according to your application's requirements. Additionally, consider error handling and proper response handling in your route to make the upload process more robust.
