import style from "./MenuAdmin.module.scss";
import { useMenuAdminViewModel } from "./MenuAdminViewModel";

function MenuAdmin(){
    const { activeMenu, menuItens, openMenu } = useMenuAdminViewModel();

    return(
        <nav className={style.menuadmin}>
            <div className={style.menuadmin___logoArea}>
                {/* Logo */}
            </div>
            <div className={style.menuadmin___navcontainer}>
                <ul className={style.navmenu}>
                {menuItens && menuItens.map((menu, index)=>{
                    const isActive = activeMenu === index;

                    return(
                        <li 
                            key={index} 
                            className={`${style.navmenu__itens} ${isActive && style.active}`}
                            onClick={()=> openMenu(menu, index)}
                        >                     
                            <span className={style.navmenu__itens__item}>
                                {menu.icon} 
                                <span className={style.content}>
                                    {menu.label}
                                </span>
                            </span>
                            <ul className={style.navmenu__itens__submenu}>
                            {menu.submenu && menu.submenu.map((sub, i)=>{
                                return(
                                    <li 
                                        className={style.navmenu__itens__submenu__item} 
                                        key={i}
                                        onClick={()=>openMenu(sub, i)}
                                    >
                                        {sub.label}
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