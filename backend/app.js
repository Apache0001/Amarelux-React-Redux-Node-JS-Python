var app = require('./app/config/server');

var rotaareaCliente = require('./app/routes/intramarelux')(app);

app.listen(5000, function(){ // (Porta 3000 escolhida mas pode ser qualquer uma, função callback)
    console.log("Servidor Node JS na porta 5000!");
});