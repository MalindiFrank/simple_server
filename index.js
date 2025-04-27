const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let collections = {
  movies: [
    { id: 1, title: "The Movie One", year: 2022 },
    { id: 2, title: "The Movie Two", year: 2023 },
    { id: 1, title: "The Movie Three", year: 2024 },
    { id: 2, title: "The Movie Four", year: 2025 },
  ],
  series: [
    { id: 1, title: "The Series One", seasons: 1 },
    { id: 2, title: "The Series Two", seasons: 2 },
    { id: 1, title: "The Series Three", seasons: 5 },
    { id: 2, title: "The Series Four", seasons: 8 },
  ],
  songs: [
    { id: 1, title: "Soulful", artist: "Lindecis", year: 2020 },
    { id: 2, title: "Sunday Song", artist: "Mick Man", year: 2019 },
    { id: 1, title: "Ghetto Youth", artist: "Badman", year: 2023 },
    { id: 2, title: "Firm and Strong", artist: "Popcaan", year: 2021 },
  ],
};

const getCollection = (type) => {
  if (type === "movies") return collections.movies;
  if (type === "series") return collections.series;
  if (type === "songs") return collections.songs;
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

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
