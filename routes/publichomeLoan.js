const express = require('express');
const router = express.Router();
const publichomeloanPool = require('../config/publichomeLoanDB');

router.get('/public-home-loans', async (req, res) => {
  try {
    const [rows] = await publichomeloanPool.query('SELECT * FROM publichomeloan');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
