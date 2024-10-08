import React, {useState} from "react"
import CardHistory from "./card-history"


interface Props{
    updateRegister: boolean
}

function HistoryTab(){
    const product = { //variavel temporaria
        historys:[
            {
                "id": "19",
                "id_user": "1",
                "id_item": "5",
                "title": "Cadastro de item",
                "description": "Body Splash Nectarina e Flor de Pessego cadastrado no sistema.",
                "date": "06/07/2024 15:28"
            },
            {
                "id": "20",
                "id_user": "1",
                "id_item": "5",
                "title": "Lançamento de Estoque",
                "description": "Entrada de 15 itens em estoque. Pedido de compra nº 5.",
                "date": "06/07/2024 16:16"
            },
            {
                "id": "21",
                "id_user": "1",
                "id_item": "5",
                "title": "Venda de Produto",
                "description": "Venda de 5 item(s) no valor de R$ 23,70. Pedido de venda nº 50",
                "date": "02/08/2024 16:16"
            },
            {
                "id": "22",
                "id_user": "1",
                "id_item": "5",
                "title": "Venda de Produto",
                "description": "Venda de 4 item(s) no valor de R$ 23,70. Pedido de venda nº 63",
                "date": "04/08/2024 16:16"
            },
            {
                "id": "23",
                "id_user": "1",
                "id_item": "5",
                "title": "Lançamento de Estoque",
                "description": "Entrada de 5 itens em estoque. Pedido de compra nº 105.",
                "date": "06/07/2024 16:16"
            }, 
            {
                "id": "24",
                "id_user": "1",
                "id_item": "5",
                "title": "Venda de Produto",
                "description": "Venda de 7 item(s) no valor de R$ 20,00. Pedido de venda nº 87",
                "date": "13/08/2024 16:16"
            },           
            {
                "id": "25",
                "id_user": "1",
                "id_item": "5",
                "title": "Atualização de Cadastro",
                "description": "Dados do produto atualizados do sistema",
                "date": "18/09/2024 12:00"
            }, 
            {
                "id": "26",
                "id_user": "1",
                "id_item": "5",
                "title": "Venda de Produto",
                "description": "Venda de 3 item(s) no valor de R$ 24,12. Pedido de venda nº 135",
                "date": "13/10/2024 16:16"
            },
            {
                "id": "27",
                "id_user": "1",
                "id_item": "5",
                "title": "Lançamento de Estoque",
                "description": "Entrada de 8 itens em estoque. Pedido de compra nº 284.",
                "date": "06/11/2024 16:16"
            },          
            {
                "id": "28",
                "id_user": "1",
                "id_item": "5",
                "title": "Produto em periodo promocional",
                "description": "Produto entrou na campanha promocional Bazar Final de Ano, com vencimento até 26/12/2024",
                "date": "15/12/2024 19:06"
            }
        ]
    };

    return(
        <article>
            {product?.historys && product?.historys.map(history => {
                return(
                    <CardHistory
                        history={history}
                    /> 
                )
            }) }
                 
        </article>
    )

}

export default HistoryTab;