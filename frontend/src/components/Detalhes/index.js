import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as CarrinhoAction from '../../store/actions/actions'

const Detalhes = ({detalhes, adicionarProduto}) => {
    return (
        <section>
            <h5 style={{fontSize: "19px"}}><strong>Detalhes:</strong></h5>
            <hr/>
            <img src={detalhes.nome_img} id={detalhes.nome_img} width="170px" alt = "Produto"></img>
            <h6 style={{fontSize: "14px"}}><strong>{detalhes.descricao}</strong></h6>
            <h6 style={{fontSize: "14px"}}>{detalhes.detalhe1}</h6>
            <h6 style={{fontSize: "14px"}}>{detalhes.detalhe2}</h6>
            <h6 style={{fontSize: "14px"}}>{detalhes.detalhe3}</h6>
            <hr />
            <p className="DescricaoProdutos" style={{textDecoration: "line-through"}}>R$ {detalhes.valor},00</p>
            <p className="PrecoProdutos">R$ {detalhes.valor_unit},00</p>
            <button className="btn btn-primary w-10 mt-2" onClick={()=>adicionarProduto(detalhes)}>Comprar</button>
        </section>
    )
}

const mapStateToProps = (state) => ({
    detalhes: state.Produtos.detalhe
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Detalhes);