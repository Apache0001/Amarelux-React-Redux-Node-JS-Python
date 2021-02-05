module.exports = function (app){

  app.get('/mensagens', function(req,res){
    var connection = app.app.config.database();
    var query = app.app.models.amareluxModel;
    query.getMensagens(connection,
        function(error,result, fields){
            console.log(error,result)
            res.json(result)
        }); 
  });

  app.post('/mensagens/salvar', function(req,res){
    var mensagem = req.body;
    var connection = app.app.config.database();
    var amareluxModel = app.app.models.amareluxModel;

    amareluxModel.setMensagens(mensagem,connection, function(error,results){
      console.log(error,results)
    });
  });
}