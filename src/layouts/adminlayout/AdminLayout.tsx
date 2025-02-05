
import { useAdminLayout, AdminLayoutProps} from "./useAdminLayout";
import style from "./AdminLayout.module.scss";
import { Outlet } from "react-router-dom";

function AdminLayout(props: AdminLayoutProps){
    const logic = useAdminLayout();

    return(
        <></>
    )
}

export default AdminLayout
