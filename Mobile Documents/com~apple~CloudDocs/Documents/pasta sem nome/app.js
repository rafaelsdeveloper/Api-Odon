const express = require("export");
const app = express();
const handlebars = require('express-hanlebars')
const sequelize = require('sequelize')

// config
    // Template Engenier

    app.engine('handleabars', handlebars({deFaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexão com o banco de dados Mysql

    const sequelize = new sequelize('test' , 'root', '123456', {
        host: "localhost",
        dialect: 'mysql'
    } )
// Rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    app.listen(8081, function(){
        console.log("servidor rodando na url http://localhost:8081")
    })