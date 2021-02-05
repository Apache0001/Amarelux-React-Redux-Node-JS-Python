module.exports = function (app){

    app.get('/produtos', function(req,res){
        var connection = app.app.config.database();
        var query = app.app.models.amareluxModel;
        query.getProdutos(connection,
            function(error,result, fields){
                console.log(error,result)
                res.json(result);
            });
    })
}