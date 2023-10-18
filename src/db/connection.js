const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'database',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'summer_club',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
