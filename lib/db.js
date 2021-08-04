var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'nodejs',
  password: 'roseisland0314',
  database: 'opentutorials'
});
db.connect(); //실제 접속

module.exports = db;
