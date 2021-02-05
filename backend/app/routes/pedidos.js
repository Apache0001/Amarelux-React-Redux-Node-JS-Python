module.exports = function (app){

  app.get('/pedidos', function(req,res){
    var connection = app.app.config.database();
    var query = app.app.models.amareluxModel;
    query.getPedidos(connection,
        function(error,result, fields){
            console.log(error,result)
            res.json(result);
        });
  })
}
  
  /* app.post('/pedidos/enviar', async (req,res) => {
  
    // {} desestrutura
    // .body: body-parser
    const {prod} = req.body
    const {qtd} = req.body
    const cli = await buscaCliente()
    
    // array com meus dados
    let pedido = []
    pedido.push({
      cod_produtos: prod,
      quantidade: qtd,
      cod_clientes: cli
    });
  
    // '?' recebe o que for inserido em 'dados'
    // arrow function de call back (quando finalizar a inserção de dados)
    connection.query('INSERT INTO ped SET?',pedido,()=>{
      pedido=[] // "esvazia" o array
      return res.json({mensagem:"Pedido enviado! Amarelux agradece!"})
    })
  }); */