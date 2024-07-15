const express = require('express');
const router = express.Router();
const educationloanPool = require('../config/educationLoan');

router.get('/education-loans', async (req, res) => {
  try {
    const [rows] = await educationloanPool.query('SELECT * FROM educationloan');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
