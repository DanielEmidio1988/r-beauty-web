
import style from "./AdminLayout.module.scss";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./components/menuadmin/MenuAdmin";
import HeaderAdmin from "./components/headeradmin/HeaderAdmin";

function AdminLayout(){
    return(
        <main className={style.adminlayout}>
            <aside className={style.adminlayout___menuarea}>
                <MenuAdmin/>
            </aside>
            <section className={style.adminlayout___contentarea}>
                <HeaderAdmin/>
                <section className={style.adminlayout___contentarea___content}>
                    <Outlet/>
                </section> 
            </section>

        </main>
    )
}

export default AdminLayout
