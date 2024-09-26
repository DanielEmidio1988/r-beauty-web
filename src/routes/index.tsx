import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Page404 from "../pages/404";
import LoginPage from "../pages/user/login";
import SignUpPage from "../pages/user/signup";
import HomeAdminPage from "../pages/admin/home";
import RegisterBrandPage from "../pages/admin/product/register-brand";
import RegisterProductPage from "../pages/admin/product/register-product";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<Page404/>}/>
                <Route path="/user/login" element={<LoginPage/>}/>
                <Route path="/user/signup" element={<SignUpPage/>}/>
                <Route path="/admin" element={<HomeAdminPage/>}/>
                <Route path="/admin/product/register-brand" element={<RegisterBrandPage/>}/>
                <Route path="/admin/product/register-product" element={<RegisterProductPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;