const express = require('express');
const app = express();
const morgan=require('morgan');
var mysql = require('mysql');

//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//primero realizar la conexion
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3307",
  database: "practica2php",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/editUsuario",(req,res)=>{
    const id_usu = req.body.id_usu
    const nombre = req.body.nombre
    const login = req.body.login
  
    con.query("update usuario set nombre="+nombre+"set login="+login+"where id_usu="+id_usu, function (err, result) {
      if(err)
      throw err;
  
      res.json(result);
    });
  });