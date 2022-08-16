const { application } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql')

const path = require('path')
const myConn = require('express-myconnection')

//Configuración
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'vistas'))

// middlewares
app.use(morgan('dev'))
app.use(myConn(mysql,{
    host: "localhost",
    user:"root",
    password:"",
    port:3306,
    database:"USUARIOS_LINKS"
}))
app.use(express.urlencoded({extended:false}))

// importamos las rutas

const Rutasurls = require("./rutas/rutas")
const {urlencoded} = require('express')


// Rutas
app.use(require('./rutas/rutas'))

//Public

//Inicializacion del servidor 

app.listen(app.get('port'), () =>{
    console.log("servidor en el puerto 3000")
})