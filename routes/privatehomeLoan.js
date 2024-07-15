
const express = require('express');
const router = express.Router();
const privatehomeloanPool = require('../config/privatehomeLoanDB');

router.get('/private-home-loans', async (req, res) => {
  try {
    const [rows] = await privatehomeloanPool.query('SELECT * FROM privatehomeloan');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
