import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./MenuAdmin.module.scss";
import {BsFillHouseFill, BsFillPeopleFill, BsFillInboxesFill, BsClipboardDataFill, BsCash, BsGraphUpArrow, BsGearFill, BsBoxArrowDownRight} from "react-icons/bs";
import { goToAdminPage, goToProductsPage, goToHomePage, goToBrandsPage } from "../../routes/navigate";

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

function MenuAdmin(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<Number | null>(null);
    const menuItens: Menu[] = [
        {
            item: "Inicio",
            url_item: ()=> goToAdminPage(navigate),
            icon: <BsFillHouseFill/>
        },
        // {
        //     item: "Clientes",
        //     icon: <BsFillPeopleFill/>,
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
            icon: <BsFillInboxesFill/>,
            submenu: [
                {
                    item: "Cadastro de Marcas",
                    url_item: ()=>goToBrandsPage(navigate),
                },
                {
                    item: "Cadastro de Produtos",
                    url_item: ()=>goToProductsPage(navigate),
                },
                // {
                //     item: "Lançamento de Estoque",
                //     url_item: ""
                // }
            ],
        },
        // {
        //     item: "Vendas",
        //     icon: <BsGraphUpArrow/>,
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
        //     icon: <BsCash/>,
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
        //     icon: <BsClipboardDataFill/>,
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
        //     icon: <BsGearFill/>,
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
            url_item: ()=> goToHomePage(navigate),
            icon: <BsBoxArrowDownRight/>
        }
    ];

    function openSubmenu(menu: Menu,index: number){
        if(menu.submenu?.length){
            setActiveMenu(activeMenu === index ? null : index);
        }else{
            menu.url_item!(navigate)
        }
    }

    return(
        <nav className={style.menuadmin}>
            <div className={style.menuadmin___logoArea}>
                {/* Logo */}
            </div>
            <div className={style.menuadmin___itens}>
                <ul>
                {menuItens && menuItens.map((menu, index)=>{
                    const isActive = activeMenu === index;

                    return(
                        <li 
                            key={index} 
                            className={`${style.menuadmin___itens___menu} ${isActive && style.active}`}
                            onClick={()=>openSubmenu(menu, index)}
                        >                     
                            <span className={style.menuadmin___itens___menu__item}>{menu.icon} {menu.item}</span>
                            <ul className={style.menuadmin___itens___menu__submenu}>
                            {menu.submenu && menu.submenu.map((sub, i)=>{
                                return(
                                    <li 
                                        className={style.menuadmin___itens___menu__submenu___item} 
                                        key={i}
                                        onClick={()=>openSubmenu(sub, i)}
                                    >
                                        {sub.item}
                                    </li>
                                )
                            })}
                            </ul>
                        </li>
                    )
                })}
                </ul>
            </div>

        </nav>
    )
}

export default MenuAdmin;