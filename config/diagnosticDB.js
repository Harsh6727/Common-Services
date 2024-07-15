const mysql = require('mysql2/promise');

const diagnosticPool = mysql.createPool({
    host: 'localhost',
    port: 5000,
    user: 'root',
    password: 'H@RsH@2709',
    database: 'diagnostic'
});

module.exports = diagnosticPool;
