
# Simple Node.js Media API Server

## Overview
This is a basic Node.js API server built with Express.js that allows you to manage collections of:
- Movies
- Series
- Songs

All data is stored dynamically inside a `.json` file. If the file does not exist, it will be created automatically when the server starts.

## Features
- **GET** `/movies`, `/series`, `/songs` — Fetch all items
- **POST** `/movies`, `/series`, `/songs` — Add a new item (send JSON body)
- **PUT** `/movies`, `/series`, `/songs` — Update an item by ID
- **DELETE** `/movies`, `/series`, `/songs` — Delete an item by ID
- **Root `/` route** serves an HTML page explaining the API usage.

## Project Structure
- `index.js` — Main server file (Express.js setup and route handling)
- `handler.js` — File system operations (reading, writing, initializing data file)
- `index.html` — API documentation page
- `data.json` — Data storage file (auto-created)

## How to Run
1. Install dependencies:
   ```bash
   npm install express
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Visit [http://localhost:3000/](http://localhost:3000/) to view the API documentation.

## Branch Info
This project is developed on a separate branch:
```
branch-name: mock-media-server-extended
```
