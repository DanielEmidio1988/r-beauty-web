import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Page404 from "../pages/404";
import LoginPage from "../pages/user/login";
import SignUpPage from "../pages/user/signup";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<Page404/>}/>
                <Route path="/user/login" element={<LoginPage/>}/>
                <Route path="/user/signup" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;