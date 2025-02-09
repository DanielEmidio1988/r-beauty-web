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
        // {
        //     label: "Clientes",
        //     icon: React.createElement(BsFillPeopleFill),
        //     submenu: [
        //         {
        //             label: "Cadastro de Clientes",
        //             url_item: ""
        //         },
        //         {
        //             label: "Pontos de Entrega",
        //             url_item: ""
        //         }
        //     ],
        // },
        {
            label: "Produto",
            icon: React.createElement(BsFillInboxesFill),
            submenu: [
                {
                    label: "Cadastro de Marcas",
                    url_item: () => goToNavigate.goToBrandsPage(navigate),
                },
                {
                    label: "Cadastro de Produtos",
                    url_item: () => goToNavigate.goToProductsPage(navigate),
                },
                // {
                //     label: "Lançamento de Estoque",
                //     url_item: ""
                // }
            ],
        },
        // {
        //     label: "Vendas",
        //     icon: React.createElement(BsGraphUpArrow),
        //     submenu: [
        //         {
        //             label: "Lançamento de Vendas",
        //             url_item: ""
        //         },
        //         {
        //             label: "Análise de Vendas",
        //             url_item: ""
        //         },
        //         {
        //             label: "Campanhas",
        //             url_item: ""
        //         }
        //     ]
        // },
        // {
        //     label: "Financeiro",
        //     icon: React.createElement(BsCash),
        //     submenu: [
        //         {
        //             label: "Contas a Pagar",
        //             url_item: ""
        //         },
        //         {
        //             label: "Contas a Receber",
        //             url_item: ""
        //         },
        //         {
        //             label: "Renegociação Parcelas",
        //             url_item: ""
        //         }
        //     ]
        // },
        // {
        //     label: "Relatórios",
        //     icon: React.createElement(BsClipboardDataFill),
        //     submenu: [
        //         {
        //             label: "Fluxo de Caixa",
        //             url_item: ""
        //         },
        //         {
        //             label: "Histórico de Vendas",
        //             url_item: ""
        //         }
        //     ]
        // },
        // {
        //     label: "Administrativo",
        //     icon: React.createElement(BsGearFill),
        //     submenu: [
        //         {
        //             label: "Perfil",
        //             url_item: ""
        //         },
        //         {
        //             label: "Configurações",
        //             url_item: ""
        //         },
        //         {
        //             label: "Notificações",
        //             url_item: ""
        //         },
        //         {
        //             label: "Logs",
        //             url_item: ""
        //         }
        //     ]
        // },
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