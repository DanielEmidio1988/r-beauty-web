import style from "./MenuAdmin.module.scss";
import { useMenuAdmin } from "./useMenuAdmin";

function MenuAdmin(){
    const logic = useMenuAdmin();

    return(
        <nav className={style.menuadmin}>
            <div className={style.menuadmin___logoArea}>
                {/* Logo */}
            </div>
            <div className={style.menuadmin___itens}>
                <ul>
                {logic.menuItens && logic.menuItens.map((menu, index)=>{
                    const isActive = logic.activeMenu === index;

                    return(
                        <li 
                            key={index} 
                            className={`${style.menuadmin___itens___menu} ${isActive && style.active}`}
                            onClick={()=> logic.openSubmenu(menu, index)}
                        >                     
                            <span className={style.menuadmin___itens___menu__item}>{menu.icon} {menu.item}</span>
                            <ul className={style.menuadmin___itens___menu__submenu}>
                            {menu.submenu && menu.submenu.map((sub, i)=>{
                                return(
                                    <li 
                                        className={style.menuadmin___itens___menu__submenu___item} 
                                        key={i}
                                        onClick={()=>logic.openSubmenu(sub, i)}
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