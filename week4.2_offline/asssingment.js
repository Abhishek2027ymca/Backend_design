/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
*/
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const filesDir = path.join(__dirname, "files");

// 1. GET /files - Return list of file names
app.get("/files", (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read directory" });
    }
    res.status(200).json(files);
  });
});

// 2. GET /file/:filename - Return file content
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(filesDir, filename);

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.status(200).send(data);
  });
});

// 3. Handle undefined routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
