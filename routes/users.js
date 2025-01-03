const express = require("express");
const pool = require("../db/database");
const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (email) VALUES ($1) RETURNING *",
      [email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update visited countries
router.put("/:id/visited", async (req, res) => {
  const { id } = req.params;
  const { visitedCountries } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET visited_countries = $1 WHERE id = $2 RETURNING *",
      [visitedCountries, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
