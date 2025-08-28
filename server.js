import express from "express";
import sqlite3 from "sqlite3";
import bodyParser from "body-parser";
import cors from "cors";

sqlite3.verbose();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./blessings.db");

db.run(`
  CREATE TABLE IF NOT EXISTS blessings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

app.get("/api/blessings", (req, res) => {
  db.all("SELECT * FROM blessings ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/blessings", (req, res) => {
  const { username, message } = req.body;
  if (!username || !message)
    return res.status(400).json({ error: "Missing fields" });

  const query = "INSERT INTO blessings (username, message) VALUES (?, ?)";
  db.run(query, [username, message], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    db.get(
      "SELECT * FROM blessings WHERE id = ?",
      [this.lastID],
      (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(row);
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
