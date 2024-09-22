import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuAdmin(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<Boolean>(false);
    const menuItens = [
        {
            item: "Inicio",
            url_item: "",
            submenu: [],
        },
        {
            item: "Produto",
            url_item: "",
            submenu: [
                {
                    item: "Cadastro de Produtos",
                    url_item: ""
                },
                {
                    item: "Lançamento de Estoque",
                    url_item: ""
                }
            ],
        },
        {
            item: "Vendas",
            url_item: "",
            submenu: [
                {
                    item: "Lançamento de Vendas",
                    url_item: ""
                },
                {
                    item: "Lançamento de Vendas",
                    url_item: ""
                }
            ]
        },
        {
            item: "Financeiro",
            url_item: "",
            submenu: [
                {
                    item: "Contas a Pagar",
                    url_item: ""
                },
                {
                    item: "Contas a Receber",
                    url_item: ""
                }
            ]
        },
        {
            item: "Relatórios",
            url_item: "",
            submenu: [
                {
                    item: "Fluxo de Caixa",
                    url_item: ""
                },
                {
                    item: "Histórico de Vendas",
                    url_item: ""
                }
            ]
        }
    ];

    return(
        <nav>
            <div>
                {/* Icon Hamburguer */}
            </div>
            {menuItens && menuItens.map(menu=>{
                return(
                    <>
                        <a>{menu.item}</a>
                    </>
                )
            })}
        </nav>
    )
}

export default MenuAdmin;