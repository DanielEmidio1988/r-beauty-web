
import { useAdminLayout } from "./useAdminLayout";
import style from "./AdminLayout.module.scss";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./components/menuadmin/MenuAdmin";

function AdminLayout(){
    const { context } = useAdminLayout();

    return(
        <main className={style.adminlayout}>
            <div>
                <MenuAdmin/>
            </div>
            <div>
                <Outlet/>
            </div>

        </main>
    )
}

export default AdminLayout
