module.exports = function (){

    this.getCadastros = function (connection, callback){
        connection.query("SELECT * FROM clientes;", callback);
    }
    this.setCadastrar = function (dados, connection, callback){
        connection.query('INSERT INTO clientes SET?',dados);
    }
    this.getMensagens = function (connection, callback){
        connection.query("SELECT * FROM clientes INNER JOIN mensagens ON mensagens.email=clientes.email;", callback);
    }

    this.setMensagens = function (dados, connection, callback){
        connection.query('INSERT INTO mensagens SET?',dados);
    }

    this.getProdutos = function (connection, callback){
        connection.query("SELECT * FROM produtos;", callback);
    }

    this.getPedidos = function (connection, callback){
        connection.query("SELECT * FROM pedidos;", callback);
    }

    this.getClienteCPF = function (cpf,connection, callback){
        connection.query('SELECT * FROM clientes WHERE?',cpf,callback);
    }

    this.getClienteEmail = function (email,connection, callback){
        connection.query(`SELECT * FROM clientes WHERE?`, email,callback);
    }

    return this;
}