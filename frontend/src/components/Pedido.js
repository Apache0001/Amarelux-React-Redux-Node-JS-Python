import React from 'react';

const Pedido = () => {
    const[ped,setPedido]=React.useState({
            cod_produtos: '',
            prod:'',
            qtd:'',
            emailp:'',
            senhap:'',
            descricao: '',
            produtos:[]
    })

    const[response, setResponse] = React.useState(null) // Hook useState

    function handleChange ({target}) {
        const {id, value} = target
        setPedido({...ped,[id]:value})
        console.log({[id]:value})
    }

    // Função para postar no link
    function handleSubmit (event) {
        event.preventDefault() // não recarregar
        fetch('http://localhost:5000/pedidos/enviar',{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ped) // transforma em JSON para a API para o banco.
        }).then((res)=>{
            setResponse(res);
        });
    }
        return(
    <>
        <title>Pedido - AmareLux Eletro</title>
            <div className = "jumbotron mt-2">
                <header>
                    <h2 className = "display-6">Pedido</h2>
                    <p className="lead">Escolha e faça já o seu pedido! A Amarelux quer te fazer feliz!</p>
                    <hr className="my-1"></hr>
                </header>
            </div>
            

        <div className = "container mr-5"> 
            <form className = "form-inline justify-content-center" onSubmit={handleSubmit}>
                <div className = "row mb-4">
                    <label htmlFor="prod" className="TituloGeral mr-2">Produto:</label>
                    <select className="form-control-md mr-5 bg-info text-white" name="prod" id="prod" value>
                    {this.state.produtos.map( produto => (
                    <option value={ped.prod} value={produto.cod_produtos} key={produto.cod_produtos}>{produto.descricao}</option>
                    ))}</select>
                    <label htmlFor="qtd" className="TituloGeral mr-2">Quantidade:</label>
                    <input value={ped.qtd} className="form-control-md mr-5 " type="number" id="qtd" name="qtd" placeholder = "Apenas números"/>
                </div>
                
                <div className = "row mb-4">           
                    <label htmlFor="emailp" className="TituloGeral mr-2">E-mail:</label>
                    <input value={ped.emailp} className="form-control-md mr-5" type="email" id="emailp" name="emailp" placeholder = "Digite e-mail cadastrado"/>

                    <label htmlFor="senhap" className="TituloGeral mr-2">Senha:</label>
                    <input value={ped.senhap} className="form-control-md mr-4" type="password" id="senhap" name="senhap" placeholder = "Digite senha cadastrada"/>
                    
                    <button className="btn btn-outline-dark" type="submit" value="IncluirPedido">Incluir no Pedido</button>
                    
                    <a className="btn btn-outline-success ml-3" href="http://localhost:3000/cadastro">Cadastre-se</a>
                </div>
            </form>
            
            <hr/>
        </div>
</>
        );
    }

export default Pedido