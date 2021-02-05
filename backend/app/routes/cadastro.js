module.exports = function (app){

  app.get('/cadastros', function(req,res){
    var connection = app.app.config.database();
    var query = app.app.models.amareluxModel;
    query.getCadastros(connection,
        function(error,result, fields){
            console.log(error,result)
            res.json(result);
        }); 
  });

  app.post('/cadastrar', function(req,res){
    var cadastro = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.setCadastrar(cadastro,connection, function(error,results){
      console.log(error,results)
    });
  });
}
