const express = require("express");
const fs = require("fs");
const path = require("path");
const { initializeDataFile, readData, writeData } = require("./handler");

const app = express();
const port = 3000;

initializeDataFile();

app.use(express.json());

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.status(500).send("Problem with loading documentation");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.send(content);
    }
  });
});

["movies", "series", "songs"].forEach((collection) => {
  app.get(`/${collection}`, (req, res) => {
    const data = readData();
    res.json(data[collection]);
  });

  app.post(`/${collection}`, (req, res) => {
    const newItem = req.body;
    const data = readData();
    data[collection].push(newItem);
    writeData(data);
    res.json(data[collection]);
  });

  app.put(`/${collection}`, (req, res) => {
    const updatedItem = req.body;
    const data = readData();
    data[collection] = data[collection].map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    writeData(data);
    res.json(data[collection]);
  });

  app.delete(`/${collection}`, (req, res) => {
    const { id } = req.body;
    const data = readData();
    data[collection] = data[collection].filter((item) => item.id !== id);
    writeData(data);
    res.json(data[collection]);
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
