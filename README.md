# Simple Node.js Server with Movies, Series, and Songs API

## Overview
This project is a simple Node.js server that provides three different API endpoints to manage:
- Movies
- Series
- Songs

Each endpoint allows you to **GET**, **POST**, **PUT**, and **DELETE** items dynamically in memory.

## Features
- **GET** `/movies`, `/series`, `/songs` — Fetch all items
- **POST** `/movies`, `/series`, `/songs` — Add a new item
- **PUT** `/movies`, `/series`, `/songs` — Update an existing item
- **DELETE** `/movies`, `/series`, `/songs` — Delete an item
- Any other route will return a **404 Not Found**.

## Project Structure
- `server.js` — Core server handling routes and data management.
- `data.js` — (Optional) In-memory data storage (arrays of movies, series, and songs).

## How to Run
1. Install Node.js if you haven't already.
2. Start the server:
   ```bash
   node server.js
   ```
3. Server will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints
- **GET** `/movies`, `/series`, `/songs` — Returns the full list.
- **POST** — Adds a new item (send JSON body).
- **PUT** — Updates an existing item (match by ID).
- **DELETE** — Removes an item (match by ID).

## Example Data Structure
```json
{
  "id": 1,
  "title": "Inception",
  "year": 2010
}
```

## Notes
- All data is stored in memory (no database or file storage).
- Server properly handles all request methods and routes.
- Designed for learning and basic API practice.
