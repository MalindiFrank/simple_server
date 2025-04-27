const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "data.json");

function initializeDataFile() {
  if (!fs.existsSync(dataPath)) {
    const initialData = {
      movies: [],
      series: [],
      songs: [],
    };
    fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2));
  }
}

function readData() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = {
  initializeDataFile,
  readData,
  writeData,
};
