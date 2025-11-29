
import style from "./AdminLayout.module.scss";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./components/menuadmin/MenuAdmin";
import HeaderAdmin from "./components/headeradmin/HeaderAdmin";
import { Drawer, Grid } from "@mui/material";

function AdminLayout(){
    return(
        <Grid component="main" className={style.adminlayout}>
            <Drawer 
                component="aside" 
                variant="permanent" 
                className={style.adminlayout___menuarea}
            >
                <MenuAdmin/>
            </Drawer>
            <Grid 
                component="section" 
                className={style.adminlayout___contentarea}
            >
                <HeaderAdmin/>
                <Grid
                    component="section"
                    className={style.adminlayout___contentarea___content}
                >
                    <Outlet/>
                </Grid> 
            </Grid>

        </Grid>
    )
}

export default AdminLayout
