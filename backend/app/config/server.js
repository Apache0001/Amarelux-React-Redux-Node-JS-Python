var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
// autoriza a conexão
/* const cors = require('cors');

app.use(cors()); */

var app = express();
app.set('view engine', 'ejs');
app.set('views', '././app/views')
// "body-parser" do express
// app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);

module.exports = app;