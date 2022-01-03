const mysql = require('mysql2');


// connect database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        // Your mySql Password
        password: 'hatetavian',
        database: 'election'
    },
    console.log('connected to the election database.')
);

module.exports = db;