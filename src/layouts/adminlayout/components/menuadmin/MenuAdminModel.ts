import React from "react";
import { hooks } from "../../../../utils/hooks";
import { Menu } from "./MenuAdminTypes";
import { goToNavigate } from "routes/navigate";
import { BsFillHouseFill, BsFillPeopleFill, BsFillInboxesFill, BsClipboardDataFill, BsCash, BsGraphUpArrow, BsGearFill, BsBoxArrowDownRight } from "react-icons/bs";

export function useMenuAdminModel() {
    const navigate = hooks.useNavigate();
    const [activeMenu, setActiveMenu] = hooks.useState<Number | null>(null);
    const menuItens: Menu[] = [
        {
            label: "Inicio",
            url_item: () => goToNavigate.goToAdminPage(navigate),
            icon: React.createElement(BsFillHouseFill)
        },
        {
            label: "Clientes",
            icon: React.createElement(BsFillPeopleFill),
            submenu: [
                {
                    label: "Cadastro de Clientes",
                    url_item: () => goToNavigate.goToCustomerPage(navigate),
                },
                {
                    label: "Extrato do Cliente",
                    url_item: () => goToNavigate.goToCustomerStatementPage(navigate),
                },
            ],
        },
        {
            label: "Produto",
            icon: React.createElement(BsFillInboxesFill),
            submenu: [
                {
                    label: "Cadastro de Marcas",
                    url_item: () => goToNavigate.goToBrandsPage(navigate),
                },
                {
                    label: "Cadastro de Categorias",
                    url_item: () => {},
                },
                {
                    label: "Cadastro de Produtos",
                    url_item: () => goToNavigate.goToProductsPage(navigate),
                },
                {
                    label: "Movimentações de Estoque",
                    url_item: () => {},
                },
            ],
        },
        {
            label: "Vendas",
            icon: React.createElement(BsGraphUpArrow),
            submenu: [
                {
                    label: "Lançar Vendas",
                    url_item: () => {},
                },
                {
                    label: "Consultar Vendas",
                    url_item: () => {},
                },
                {
                    label: "Cadastrar Campanha", // Cadastro de Bazar, eventos promocionais, etc...
                    url_item: () => {},
                },
                {
                    label: "Vendas em aberto",
                    url_item: () => {},
                },
                {
                    label: "Devoluções/Trocas",
                    url_item: () => {},
                },
            ]
        },
        {
            label: "Financeiro",
            icon: React.createElement(BsCash),
            submenu: [
                {
                    label: "Contas a Pagar",
                    url_item: () => {},
                },
                {
                    label: "Contas a Receber",
                    url_item: () => {},
                },
                {
                    label: "Renegociação Parcelas",
                    url_item: () => {},
                },
                {
                    label: "Receitas e Despesas Diversas",
                    url_item: () => {},
                },
                {
                    label: "Fechamento Mensal",
                    url_item: () => {},
                }
            ]
        },
        {
            label: "Relatórios",
            icon: React.createElement(BsClipboardDataFill),
            submenu: [
                {
                    label: "Fluxo de Caixa",
                    url_item: () => {},
                },
                {
                    label: "Histórico de Vendas",
                    url_item: () => {},
                },
                {
                    label: "Produtos Mais Vendidos",
                    url_item: () => {},
                },
                {
                    label: "Financeiro Mensal",
                    url_item: () => {},
                },
                {
                    label: "Inadimplência",
                    url_item: () => {},
                }
                
            ]
        },
        {
            label: "Administrativo",
            icon: React.createElement(BsGearFill),
            submenu: [
                {
                    label: "Perfil", // Perfil de usuário
                    url_item: () => {},
                },
                {
                    label: "Configurações", // Dados da consultoria, Indice de estoque baixo, Métodos de pagamentos, etc...
                    url_item: () => {},
                },
                {
                    label: "Notificações",
                    url_item: () => {},
                },
                {
                    label: "Logs",
                    url_item: () => {},
                }
            ]
        },
        {
            label: "Sair",
            url_item: () => goToNavigate.goToHomePage(navigate),
            icon: React.createElement(BsBoxArrowDownRight),
        }
    ];

    return {
        activeMenu,
        setActiveMenu,
        menuItens,
        navigate
    }
}