import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Page404 from "../pages/404";
import LoginPage from "../pages/user/login";
import SignUpPage from "../pages/user/signup";
import HomeAdminPage from "../pages/admin/home";
import BrandsPage from "../pages/admin/product/brands/brand";
import ProductsPage from "../pages/admin/product/products/product";
import RegisterProductPage from "../pages/admin/product/products/register-product";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<Page404/>}/>
                <Route path="/user/login" element={<LoginPage/>}/>
                <Route path="/user/signup" element={<SignUpPage/>}/>
                <Route path="/admin" element={<HomeAdminPage/>}/>
                <Route path="/admin/product/brands" element={<BrandsPage/>}/>
                <Route path="/admin/product/products" element={<ProductsPage/>}/>
                <Route path="/admin/product/register-product" element={<RegisterProductPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;