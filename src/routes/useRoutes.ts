import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import HomePage from "../pages/home/HomePage";
import Page404 from "../pages/404";
import LoginPage from "../pages/user/login/LoginPage";
import SignUpPage from "../pages/user/signup/SignUpPage";
import HomeAdminPage from "../pages/admin/home/HomeAdminPage";
import RegisterBrandsPage from "pages/admin/product/brands/registerbrand/RegisterBrandPage";
import ProductsPage from "../pages/admin/product/products/product/ProductPage";
import RegisterProductPage from "../pages/admin/product/products/registerproduct/RegisterProductPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(HomePage),
    },
    {
        path: "/admin",
        element: React.createElement(AdminLayout),
        children: [
            {
                path: "",
                element: React.createElement(HomeAdminPage),
            },
            {
                path: "product/products",
                element: React.createElement(ProductsPage),
            },
            {
                path: "product/register-product",
                element: React.createElement(RegisterProductPage),
            },
            {
                path: "product/brands",
                element: React.createElement(RegisterBrandsPage),
            }
        ]
    },
    {
        path: "*",
        element: React.createElement(Page404),
    }
])