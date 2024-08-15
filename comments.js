// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Use the public folder to serve static files
app.use(express.static("public"));

// Use the JSON parser middleware
app.use(express.json());

// Use the comments router
app.use("/comments", require("./comments"));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});