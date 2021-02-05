import React from 'react'

const Fcontato = () => {
    const[mens,setMensagem]=React.useState({
        email:"",
        mensagem:""
    })

    const[response, setResponse] = React.useState(null) // Hook useState

    function handleChange ({target}) {
        const {id, value} = target
        setMensagem({...mens,[id]:value})
        console.log({[id]:value})
    }

    // Função para postar no link
    function handleSubmit (event) {
        event.preventDefault() // não recarregar
        fetch('http://localhost:5000/mensagens/salvar',{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(mens) // transforma em JSON para a API para o banco.
        }).then((res)=>{
            setResponse(res);
        });
    }

    return(
        <>
        <div className = "col">
            <form className = "form-inline justify-content-center" onSubmit={handleSubmit}>
                <div className = "row mb-4 justify-content-center">
                    <label htmlFor="email" className="TituloGeral mr-2">E-mail (somente clientes cadastrados):</label>
                    <input className="form-control mr-5" 
                    type="email" 
                    id="email" 
                    name="email"
                    value={mens.email}
                    onChange={handleChange} 
                    placeholder = "email@exemplo.com.br"/>
                </div>

                <div className = "row mb-4 justify-content-center">        
                    <label htmlFor="mensagem" className="TituloGeral ml-5 mr-2">Mensagem:</label>
                    <textarea className="form-control mr-3 mt-3" 
                    id="mensagem" 
                    name="mensagem"
                    value={mens.mensagem}
                    onChange={handleChange}   
                    rows="7" cols="40" 
                    placeholder = "Fique à vontade, a Amarelux quer te conhecer!"></textarea>
                </div>

                <button className="btn btn-primary btn-block w-50" type="submit"value="Enviar">Enviar</button>
            </form>
        </div>    
    </>
    )
}

export default Fcontato