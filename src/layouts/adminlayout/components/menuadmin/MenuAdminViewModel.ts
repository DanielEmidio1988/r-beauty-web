import { Menu } from "./MenuAdminTypes";
import { useMenuAdminModel } from "./MenuAdminModel";

export function useMenuAdminViewModel(){
    const { activeMenu, setActiveMenu, navigate, menuItens } = useMenuAdminModel();

    /** Responsible for navigating pages within the admin area.
     * 
     * @param menu user selected menu
     * @param index individual key of the selected menu within the menu list
     * @returns If the user window width is less than 765px and has submenus, the menu area will open the list of submenus for navigation. Otherwise, it will open the selected page.
     */
    function openMenu(menu: Menu, index: number){
        const hasSubmenu = menu.submenu?.length;
        const isMobile = window.innerWidth < 765;

        if (hasSubmenu && isMobile){
            setActiveMenu(activeMenu === index ? null : index);
            return;
        }

        if(menu.url_item){
            menu.url_item!(navigate);
        }
    }

    return { openMenu, activeMenu, setActiveMenu, menuItens }

}