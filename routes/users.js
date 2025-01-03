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

// Get user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (email) VALUES ($1) ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email RETURNING *",
      [email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update been countries
router.put("/:id/been", async (req, res) => {
  const { id } = req.params;
  const { beenCountries } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET been_countries = $1 WHERE id = $2 RETURNING *",
      [beenCountries, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update lived countries
router.put("/:id/lived", async (req, res) => {
  const { id } = req.params;
  const { livedCountries } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET lived_countries = $1 WHERE id = $2 RETURNING *",
      [livedCountries, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update want countries
router.put("/:id/want", async (req, res) => {
  const { id } = req.params;
  const { wantCountries } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET want_countries = $1 WHERE id = $2 RETURNING *",
      [wantCountries, id]
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
