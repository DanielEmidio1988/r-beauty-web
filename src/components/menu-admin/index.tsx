import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./MenuAdmin.module.scss";

interface SubMenu{
    item: string;
    url_item: string; // (navigate: any) => void;
}

interface Menu{
    item: string;
    url_item?: string; //(navigate: any) => void;
    icon?: JSX.Element;
    submenu?: SubMenu[];
}

function MenuAdmin(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<Boolean>(false);
    const menuItens: Menu[] = [
        {
            item: "Inicio",
            url_item: "",
        },
        {
            item: "Clientes",
            submenu: [
                {
                    item: "Cadastro de Clientes",
                    url_item: ""
                },
                {
                    item: "Pontos de Entrega",
                    url_item: ""
                }
            ],
        },
        {
            item: "Produto",
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
            submenu: [
                {
                    item: "Lançamento de Vendas",
                    url_item: ""
                },
                {
                    item: "Análise de Vendas",
                    url_item: ""
                },
                {
                    item: "Campanhas",
                    url_item: ""
                }
            ]
        },
        {
            item: "Financeiro",
            submenu: [
                {
                    item: "Contas a Pagar",
                    url_item: ""
                },
                {
                    item: "Contas a Receber",
                    url_item: ""
                },
                {
                    item: "Renegociação Parcelas",
                    url_item: ""
                }
            ]
        },
        {
            item: "Relatórios",
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
        },
        {
            item: "Administrativo",
            submenu: [
                {
                    item: "Perfil",
                    url_item: ""
                },
                {
                    item: "Configurações",
                    url_item: ""
                },
                {
                    item: "Notificações",
                    url_item: ""
                },
                {
                    item: "Logs",
                    url_item: ""
                }
            ]
        },
        {
            item: "Sair",
            url_item: ""
        }
    ];

    return(
        <nav className={style.menuadmin}>
            <div>
                {/* Icon Hamburguer */}
            </div>
            <div className={style.menuadmin___itens}>
                {menuItens && menuItens.map(menu=>{
                    return(
                        <>
                            <a>{menu.item}</a>
                        </>
                    )
                })}
            </div>

        </nav>
    )
}

export default MenuAdmin;