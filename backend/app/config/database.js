var mysql = require('mysql');

var connMySQL = function (){
    console.log("Conexão com BD estabelecida!");
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'amarelux'
    });
}

module.exports  = function(){
    return connMySQL;
}