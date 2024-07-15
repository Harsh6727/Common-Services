const mysql = require('mysql2/promise');

const publichomeloanPool = mysql.createPool({
    host: 'localhost',
    port: 5000, 
    user: 'root',
    password: 'H@RsH@2709',
    database: 'publichomeloan'
});

module.exports = publichomeloanPool;
