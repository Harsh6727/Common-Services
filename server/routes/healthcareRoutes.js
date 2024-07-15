const express = require('express');
const router = express.Router();
const healthcarePool = require('../config/healthcareDB');

router.get('/states', async (req, res) => {
    try {
        const [results] = await healthcarePool.query('SELECT DISTINCT state FROM hospitals ORDER BY state ASC');
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
        const [results] = await healthcarePool.query('SELECT DISTINCT city FROM hospitals WHERE state = ? ORDER BY city ASC', [state]);
        const cities = results.map(row => row.city);
        res.json(cities);
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).send('Error fetching cities');
    }
});

router.get('/hospitals', async (req, res) => {
    const { state, city, page = 1, limit = 7 } = req.query;

    if (!state || !city) {
        return res.status(400).send('State and city are required');
    }

    const offset = (page - 1) * limit;

    try {
        const [results] = await healthcarePool.query('SELECT firstName, address FROM hospitals WHERE state = ? AND city = ? LIMIT ? OFFSET ?', [state, city, parseInt(limit), parseInt(offset)]);
        res.json(results);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).send('Error fetching hospitals');
    }
});

router.post('/add-hospital', async (req, res) => {
    const { firstName, address, state, city } = req.body;

    if (!firstName || !address || !state || !city) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const query = 'INSERT INTO hospitals (firstName, address, state, city) VALUES (?, ?, ?, ?)';
        await healthcarePool.execute(query, [firstName, address, state, city]);
        res.status(201).json({ message: 'Hospital added successfully' });
    } catch (error) {
        console.error('Error adding hospital:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
