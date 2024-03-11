const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set up a route to serve the food blog HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "foodblog.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
