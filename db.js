var mysql = require('mysql'); 

var con = mysql.createConnection({
    host: "localhost",
    user: "test_user",
    password: "test_user",
    database: "spotico"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE test (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });
  });