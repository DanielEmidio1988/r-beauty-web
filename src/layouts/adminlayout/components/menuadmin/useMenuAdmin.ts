import React from "react";
import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../utils/hooks";
import {BsFillHouseFill, BsFillPeopleFill, BsFillInboxesFill, BsClipboardDataFill, BsCash, BsGraphUpArrow, BsGearFill, BsBoxArrowDownRight} from "react-icons/bs";
import { goToNavigate } from "routes/navigate";

export interface MenuAdminProps{};

interface SubMenu{
    item: string;
    url_item: (navigate: any) => void;
}

interface Menu{
    item: string;
    url_item?: (navigate: any) => void; 
    icon?: JSX.Element;
    submenu?: SubMenu[];
}

export function useMenuAdmin(){
    const context = useBaseContextData();
    const navigate = hooks.useNavigate();
    const [activeMenu, setActiveMenu ] = hooks.useState<Number | null>(null);
        const menuItens: Menu[] = [
            {
                item: "Inicio",
                url_item: ()=> goToNavigate.goToAdminPage(navigate),
                icon: React.createElement(BsFillHouseFill)
            },
            // {
            //     item: "Clientes",
            //     icon: React.createElement(BsFillPeopleFill),
            //     submenu: [
            //         {
            //             item: "Cadastro de Clientes",
            //             url_item: ""
            //         },
            //         {
            //             item: "Pontos de Entrega",
            //             url_item: ""
            //         }
            //     ],
            // },
            {
                item: "Produto",
                icon: React.createElement(BsFillInboxesFill),
                submenu: [
                    {
                        item: "Cadastro de Marcas",
                        url_item: ()=> goToNavigate.goToBrandsPage(navigate),
                    },
                    {
                        item: "Cadastro de Produtos",
                        url_item: ()=> goToNavigate.goToProductsPage(navigate),
                    },
                    // {
                    //     item: "Lançamento de Estoque",
                    //     url_item: ""
                    // }
                ],
            },
            // {
            //     item: "Vendas",
            //     icon: React.createElement(BsGraphUpArrow),
            //     submenu: [
            //         {
            //             item: "Lançamento de Vendas",
            //             url_item: ""
            //         },
            //         {
            //             item: "Análise de Vendas",
            //             url_item: ""
            //         },
            //         {
            //             item: "Campanhas",
            //             url_item: ""
            //         }
            //     ]
            // },
            // {
            //     item: "Financeiro",
            //     icon: React.createElement(BsCash),
            //     submenu: [
            //         {
            //             item: "Contas a Pagar",
            //             url_item: ""
            //         },
            //         {
            //             item: "Contas a Receber",
            //             url_item: ""
            //         },
            //         {
            //             item: "Renegociação Parcelas",
            //             url_item: ""
            //         }
            //     ]
            // },
            // {
            //     item: "Relatórios",
            //     icon: React.createElement(BsClipboardDataFill),
            //     submenu: [
            //         {
            //             item: "Fluxo de Caixa",
            //             url_item: ""
            //         },
            //         {
            //             item: "Histórico de Vendas",
            //             url_item: ""
            //         }
            //     ]
            // },
            // {
            //     item: "Administrativo",
            //     icon: React.createElement(BsGearFill),
            //     submenu: [
            //         {
            //             item: "Perfil",
            //             url_item: ""
            //         },
            //         {
            //             item: "Configurações",
            //             url_item: ""
            //         },
            //         {
            //             item: "Notificações",
            //             url_item: ""
            //         },
            //         {
            //             item: "Logs",
            //             url_item: ""
            //         }
            //     ]
            // },
            {
                item: "Sair",
                url_item: ()=> goToNavigate.goToHomePage(navigate),
                icon: React.createElement(BsBoxArrowDownRight),
            }
        ];
    
        function openSubmenu(menu: Menu,index: number){
            if(menu.submenu?.length){
                setActiveMenu(activeMenu === index ? null : index);
            }else{
                menu.url_item!(navigate)
            }
        }

    return { context, navigate, activeMenu, setActiveMenu, menuItens, openSubmenu }
}