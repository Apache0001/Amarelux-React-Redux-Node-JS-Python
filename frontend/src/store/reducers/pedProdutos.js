const ESTADO_INICIAL = {
    produto:{},
    detalhe:{},
    catalogo: [
        {
        cod_produtos:1,
        nome_prod:"geladeira",
        descricao:"Geladeira Frost Free 310 Litros Branco Electrolux (TF39)",
        valor:2299,
        valor_unit:1999,
        nome_img:"imagens/produtos/Refrigerador_TF39.webp",
        detalhe1: "Painel externo: Selecione a função Drink Express ou Turbo Congelamento",
        detalhe2: "Frost Free",
        detalhe3: "Prateleira retrátil no freezer"
        },
        {
        cod_produtos:2,
        nome_prod:"geladeira",
        descricao:"Geladeira Cycle Defrost 260L Branco Electrolux (DC35A)",
        valor:1869,
        valor_unit:1799,
        nome_img:"imagens/produtos/Refrigerador_DC35A.webp",
        detalhe1: "Design Único com Puxador Ergonômico e Integrado",
        detalhe2: "Prateleira Porta-Latas Reversível para 5 Unidades",
        detalhe3: "Refrigerador com Super Freezer - 18º C"
        },
        {
        cod_produtos:3,
        nome_prod:"geladeira",
        descricao:"Geladeira Top Freezer cor Inox 382L Electrolux (TF42S)",
        valor:3129,
        valor_unit:2699,
        nome_img:"imagens/produtos/Refrigerador_TF42S.webp",
        detalhe1: "Gavetão de frutas e legumes",
        detalhe2: "Prateleiras 100% removíveis",
        detalhe3: "Compartimento para alimentos frescos"
        },
        {
        cod_produtos:4,
        nome_prod:"ar",
        descricao:"Ar Condicionado Split 12.000 Btus Frio Linha Ecoturbo Electrolux (VI12F/VE12F)",
        valor:1355,
        valor_unit:1355,
        nome_img:"imagens/produtos/Ar_VI12F-VE12F.webp",
        detalhe1: "Tecnologia turbo para temperaturas agradáveis mais rapidamente.",
        detalhe2: "Eficiência Energética A",
        detalhe3: "Unidade externa com chassi inoxidável"
        },
        {
        cod_produtos:5,
        nome_prod:"ar",
        descricao:"Ar Condicionado Split 12.000 Btus Quente/Frio Electrolux (TI12R/TE12R)",
        valor:1709,
        valor_unit:1709,
        nome_img:"imagens/produtos/Ar_TI12R-TE12R.webp",
        detalhe1: "Sistema de Tripla Filtragem",
        detalhe2: "Função Auto-limpeza",
        detalhe3: "Função Siga-me: temperatura mantida onde está localizado o controle remoto."
        },
        {
        cod_produtos:6,
        nome_prod:"fogao",
        descricao:"Fogão 4 Bocas Electrolux Prata Automático Mesa de Vidro e Porta Full Glass (52LSV)",
        valor:1599,
        valor_unit:1499,
        nome_img:"imagens/produtos/Fog%C3%A3o_52LBS.webp",
        detalhe1: "Mesa de vidro temperado",
        detalhe2: "Grades individuais esmaltadas",
        detalhe3: "Forno com duas prateleiras, uma manual e uma autodeslizante"
        },
        {
        cod_produtos:7,
        nome_prod:"fogao",
        descricao:"Fogão 5 Bocas Electrolux Prata Automático Ultra Chama e Vidro Removível (76LSU)",
        valor:1899,
        valor_unit:1999,
        nome_img:"imagens/produtos/Fog%C3%A3o_76LSU.webp",
        detalhe1: "Potência de sobra",
        detalhe2: "Vidro interno do forno removível",
        detalhe3: "Grades duplas"
        },
        {
        cod_produtos:8,
        nome_prod:"lavaroupas",
        descricao:"Lavadora de Roupas Electrolux Essential Care 8,5kg (LES09)",
        valor:1459,
        valor_unit:1249,
        nome_img:"imagens/produtos/LavRoupas_LES09.webp",
        detalhe1: "Diluição inteligente para uma melhor lavagem",
        detalhe2: "Filtro pega fiapos",
        detalhe3: "Dispenser com dosador econômico"
        },
        {
        cod_produtos:9,
        nome_prod:"lavaroupas",
        descricao:"Lavadora de Roupas Electrolux Essencial Care 13kg (LES13)",
        valor:1949,
        valor_unit:1699,
        nome_img:"imagens/produtos/LavRoupas_LES13.webp",
        detalhe1: "Eficiente e sofisticada",
        detalhe2: "12 programas de lavagem",
        detalhe3: "Tecla Turbo Agitação"
        },
        {
        cod_produtos:10,
        nome_prod:"lavaloucas",
        descricao:"Lava-louças Electrolux Branca 8 Serviços (LV08B)",
        valor:2199,
        valor_unit:2199,
        nome_img:"imagens/produtos/LavLou%C3%A7as_LV08B.webp",
        detalhe1: "Programa Express 30 minutos",
        detalhe2: "Painel blue touch",
        detalhe3: "Classificação energética e performance de lavagem A" 
        },
        {
        cod_produtos:11,
        nome_prod:"lavaloucas",
        descricao:"Lava-Louças Electrolux 8 Serviços Cinza (LE08S)",
        valor:2799,
        valor_unit:2499,
        nome_img:"imagens/produtos/LavLou%C3%A7as_LE08S.webp",
        detalhe1: "Painel funcional",
        detalhe2: "Garantia de segurança",
        detalhe3: "Programas: Acquajet, Express 30', Delicado, Eco, Normal e Panelas."
        },
        {
        cod_produtos:12,
        nome_prod:"microondas",
        descricao:"Micro-Ondas Painel Seguro 20L Electrolux (MTD30)",
        valor:539,
        valor_unit:499,
        nome_img:"imagens/produtos/Microondas_MTD30.webp",
        detalhe1: "10 níveis de potência",
        detalhe2: "Trava de segurança",
        detalhe3: "Tecla Início + 30 s"
        },
        {
        cod_produtos:13,
        nome_prod:"microondas",
        descricao:"Micro-Ondas Electrolux Branco 27L com 55 Receitas pré-programadas (MB37R)",
        valor:639,
        valor_unit:589,
        nome_img:"imagens/produtos/Microondas_MB37R.webp",
        detalhe1: "Função Limpa Fácil e Função Tira-Odor",
        detalhe2: "Função Manter Aquecido",
        detalhe3: "Menu Faça Fácil"
        },
        {
        cod_produtos:14,
        nome_prod:"microondas",
        descricao:"Micro-Ondas Electrolux Meus Favoritos 31L (MEF41)",
        valor:699,
        valor_unit:599,
        nome_img:"imagens/produtos/Microondas_MEF41.webp",
        detalhe1: "Painel simples e intuitivo",
        detalhe2: "Menu Light",
        detalhe3: "Display Digital"
        }
    ]
};

export default function Produtos (state=ESTADO_INICIAL, action){
    console.log(action)
    if(action.type==="ADICIONAR_PRODUTO"){
        return{
        ...state,
        produto:action.prods,
        }
    } else if(action.type==="DETALHAR_PRODUTO"){
        return{
        ...state,
        detalhe:action.dets,
        }
    }
    return state
}