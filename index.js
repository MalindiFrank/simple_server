const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "The Matrix", director: "Wachowskis", year: 1999 },
];

let series = [
  { id: 1, title: "Breaking Bad", seasons: 5, genre: "Crime" },
  { id: 2, title: "Stranger Things", seasons: 4, genre: "Sci-Fi" },
];

let songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", year: 2020 },
  { id: 2, title: "Shape of You", artist: "Ed Sheeran", year: 2017 },
];

const getCollection = (type) => {
  if (type === "movies") return movies;
  if (type === "series") return series;
  if (type === "songs") return songs;
  return null;
};

app.get("/:type", (req, res) => {
  const { type } = req.params;
  const collection = getCollection(type);
  if (collection) {
    res.json(collection);
  } else {
    res.status(404).json({ message: "Route not found" });
  }
});

app.post("/:type", (req, res) => {
  const { type } = req.params;
  const newItem = req.body;
  const collection = getCollection(type);
  if (collection && newItem) {
    newItem.id = collection.length
      ? collection[collection.length - 1].id + 1
      : 1;
    collection.push(newItem);
    res.json(collection);
  } else {
    res.status(404).json({ message: "Invalid request" });
  }
});

app.put("/:type/:id", (req, res) => {
  const { type, id } = req.params;
  const updatedItem = req.body;
  const collection = getCollection(type);
  if (collection) {
    const index = collection.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      collection[index] = { ...collection[index], ...updatedItem };
      res.json(collection);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
});

app.delete("/:type/:id", (req, res) => {
  const { type, id } = req.params;
  const collection = getCollection(type);
  if (collection) {
    const index = collection.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      collection.splice(index, 1);
      res.json(collection);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
