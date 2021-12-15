var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3307",
  database: "practica1php",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


con.query("SELECT * from vehiculos", function (err, result, fields) {
    if(err)
    throw err;

    result.forEach(results => {
        console.log(JSON.stringify(results,null,2));
    });
})