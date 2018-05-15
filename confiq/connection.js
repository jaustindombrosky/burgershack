// Node Dependency
var mysql = require('mysql');
var connection;

// Heroko and MySql DB
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', // Add your password
    database : 'burgers_db' // Add your database
  });
}
// Export the Connection
module.exports = connection;