import React from 'react'
import {connect} from 'react-redux'

const ProdAdicionado = ({produto}) => {
    return (
        <section>
            <h5 style={{fontSize: "18px"}}><strong>Adicionado ao Carrinho:</strong></h5>
            <h5 style={{fontSize: "14px"}}>{produto.descricao}</h5>
            <h5 style={{fontSize: "14px"}}>R$ {produto.valor_unit},00</h5>
            <hr/>
        </section>
    )
}

export default connect((state)=>({
    produto: state.Produtos.produto
}))(ProdAdicionado);
