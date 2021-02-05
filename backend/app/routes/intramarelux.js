module.exports = function (app){

  app.get('/intramarelux', function(req,res){
    res.render('index');
  });

  app.post('/clientes/email', function(req,res){
    var email = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.getClienteEmail(email,connection, function(error,results){
      console.log(error, results, email)
      res.render('intramarelux',{dados: results});
    });
  });

  app.post('/clientes/cpf', function(req,res){
    var cpf = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.getClienteCPF(cpf,connection, function(error,results){
      console.log(error, results, cpf)
      res.render('intramarelux',{dados: results});
    });
  });
}