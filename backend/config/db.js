const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sowmith@2005',
  database: 'football_ticket_db'
});
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});
module.exports = connection;