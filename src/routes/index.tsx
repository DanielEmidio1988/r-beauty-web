import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Page404 from "../pages/404";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;