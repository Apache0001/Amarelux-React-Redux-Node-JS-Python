module.exports = function (app){

  app.get('/intramarelux', function(req,res){
    res.render('index');
  });

  app.post('/email', function(req,res){
    var clientes = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.getClienteEmail(clientes,connection, function(error,results){
      console.log(error, results, clientes)
      res.render('intramarelux',{dados: results});
    });
  });

  app.post('/cpf', function(req,res){
    var clientes = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.getClienteCPF(clientes,connection, function(error,results){
      console.log(error, results, clientes)
      res.render('intramarelux',{dados: results});
    });
  });
}