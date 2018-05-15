// NODE
var mysql = require('mysql');
var connection;
// HEROKU MYSQL
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgerz'
  });
}
module.exports = connection;