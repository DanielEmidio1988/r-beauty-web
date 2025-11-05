import { RouterProvider } from "react-router-dom";
import { ProviderData } from "../context/BaseContext";
import "../assets/scss/styled.scss";
import { routes } from "./useRoutes";

function Router(){
    return (
    <ProviderData>
        <RouterProvider router={routes} />
    </ProviderData>
    )
}

export default Router;