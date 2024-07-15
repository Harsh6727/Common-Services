const express = require('express');
const router = express.Router();
const diagnosticPool = require('../config/diagnosticDB');

router.get('/states', async (req, res) => {
    try {
        const [results] = await diagnosticPool.query('SELECT DISTINCT state FROM diagnostic ORDER BY state ASC');
        const states = results.map(row => row.state);
        res.json(states);
    } catch (error) {
        console.error('Error fetching states:', error);
        res.status(500).send('Error fetching states');
    }
});

router.get('/cities', async (req, res) => {
    const { state } = req.query;
    if (!state) {
        return res.status(400).send('State is required');
    }

    try {
        const [results] = await diagnosticPool.query('SELECT DISTINCT city FROM diagnostic WHERE state = ? ORDER BY city ASC', [state]);
        const cities = results.map(row => row.city);
        res.json(cities);
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).send('Error fetching cities');
    }
});

router.get('/diagnostic-centers', async (req, res) => {
    const { state, city, page = 1, limit = 7 } = req.query;

    if (!state || !city) {
        return res.status(400).send('State and city are required');
    }

    const offset = (page - 1) * limit;

    try {
        const [results] = await diagnosticPool.query('SELECT name, address, contact FROM diagnostic WHERE state = ? AND city = ? LIMIT ? OFFSET ?', [state, city, parseInt(limit), parseInt(offset)]);
        res.json(results);
    } catch (error) {
        console.error('Error fetching diagnostic centers:', error);
        res.status(500).send('Error fetching diagnostic centers');
    }
});

module.exports = router;
