export function adicionarProduto(prods){
    return{
        type:"ADICIONAR_PRODUTO",
        prods,
    };
}

export function detalharProduto(dets){
    return{
        type:"DETALHAR_PRODUTO",
        dets,
    };
}