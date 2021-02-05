import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as CarrinhoAction from '../../store/actions/actions'



const Produto = ({prods, detalharProduto}) => {
   
    return (
            <section>  
            {prods.map(item=> ( 
                <div id={item.nome_prod} className = "ItemProdutos mr-4 mb-5">
                    <img src={item.nome_img} id={item.nome_img} width="170px" alt = "Produto"></img>
                    <p><a className="DescricaoProdutos" href="#" onClick={()=>detalharProduto(item)}>{item.descricao}</a></p>
                    <hr />
                    <p className="DescricaoProdutos" style={{textDecoration: "line-through"}}>R$ {item.valor},00</p>
                    <p className="PrecoProdutos">R$ {item.valor_unit},00</p>
                </div>
            ))}
            </section>
    )
}

const mapStateToProps = (state) => ({
    prods: state.Produtos.catalogo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Produto);
