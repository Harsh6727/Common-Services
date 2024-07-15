const mysql = require('mysql2/promise');

const educationloanPool = mysql.createPool({
    host: 'localhost',
    port: 5000, 
    user: 'root',
    password: 'H@RsH@2709',
    database: 'educationloan'
});

module.exports = educationloanPool;