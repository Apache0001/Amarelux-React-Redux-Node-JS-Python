import React from 'react';
import Produto from './Produto';
import PedProdutos from './prodAdicionado';
import Detalhes from './Detalhes'

export default function Produtos() {

    return(
        <div className = "container-fluid">
            <div className = "row ml-2 w-90">
                <div className = "col-w-15" id = "Categorias">
                    <Detalhes />
                <div className = "mt-3">
                    <PedProdutos />
                </div>                
                </div>
                <div className = "col Produtos"> 
                    <Produto /> 
                </div>
            </div>
            
        </div>
    );
}