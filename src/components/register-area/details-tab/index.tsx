function DetailsTab(){
    const product = { //Variavel temporaria
        "id": "6",
        "id_user": "1",
        "name": "Malbec Black",
        "brand": "Boticário",
        "profit": 15,
        "cost": 137.91,
        "suggested_sale": 162.25,
        "sale_value": 189.90,
        "promotional_value": 0,
        "active_promotion": false,
        "promotion_name": "",
        "promotion_expiration_date": "",
        "stock": 9,
        "product_unavailable": false,
        "history": [
            {
                "id": "19",
                "id_user": "1",
                "id_item": "5",
                "title": "Cadastro de item",
                "description": "Malbec Black cadastrado no sistema.",
                "date": "06/12/2024 15:28"
            },
            {
                "id": "20",
                "id_user": "1",
                "id_item": "5",
                "title": "Lançamento de Estoque",
                "description": "Entrada de 9 itens em estoque. Pedido de compra nº 530.",
                "date": "06/12/2024 16:16"
            }
        ]
    };

    //Neste ponto, enviar os dados tratados via Props, possívelmente criar uma função em utils
    return(
        <article>
            <div>
                <p><b>Nome:</b> {product.name}</p>
                <p><b>Criado em:</b>{product.history[0].date}</p>
                <p><b>Ultima atualização em:</b> {product.history[0].date}</p>
                <p><b>Marca:</b> {product.brand}</p>
                <p><b>Lucratividade do Produto:</b> {product.profit}</p>
                <p><b>Preço de Custo:</b> {product.cost}</p>
            </div>
            <div>
                {/* Gráfico Area */}
            </div>

        </article>
    )
}

export default DetailsTab