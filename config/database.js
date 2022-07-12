const Pool = require("pg").Pool;



require('dotenv').config({path:'./.env'})

const pool = new Pool({

//    user:process.env.USER,
//    password: process.env.PASSWORD,
//    host:process.env.HOST,
//    port:5432,
//    database:process.env.DATABASE

 user: "root",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "sistemas"


});
pool.connect((error)=>{
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
});

module.exports = pool;
