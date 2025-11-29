import { RouterProvider } from "react-router-dom";
import { BaseContextProvider } from "../contexts/basecontextprovider/BaseContext";
import "../assets/scss/styled.scss";
import { routes } from "./useRoutes";

function Router(){
    return (
    <BaseContextProvider>
        <RouterProvider router={routes} />
    </BaseContextProvider>
    )
}

export default Router;