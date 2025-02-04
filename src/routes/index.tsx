import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProviderData } from "../context/BaseContext";
import HomePage from "../pages/home/HomePage";
import Page404 from "../pages/404";
import LoginPage from "../pages/user/login/LoginPage";
import SignUpPage from "../pages/user/signup/SignUpPage";
import HomeAdminPage from "../pages/admin/home/HomeAdminPage";
import RegisterBrandsPage from "pages/admin/product/brands/registerbrand/RegisterBrandPage";
import ProductsPage from "../pages/admin/product/products/product/ProductPage";
import RegisterProductPage from "../pages/admin/product/products/registerproduct/RegisterProductPage";
import "../assets/scss/styled.scss"

function Router(){
    return(
        <ProviderData>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<Page404/>}/>
                    <Route path="/user/login" element={<LoginPage/>}/>
                    <Route path="/user/signup" element={<SignUpPage/>}/>
                    <Route path="/admin" element={<HomeAdminPage/>}/>
                    <Route path="/admin/product/brands" element={<RegisterBrandsPage/>}/>
                    <Route path="/admin/product/products" element={<ProductsPage/>}/>
                    <Route path="/admin/product/register-product" element={<RegisterProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </ProviderData>
    )
}

export default Router;