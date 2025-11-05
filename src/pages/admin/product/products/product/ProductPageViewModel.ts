import { useEffect } from "react";
import { useProductPageModel } from "./ProductPageModel";
import products from "../../../../../assets/data/products.json";

export function useProductPageViewModel(){
    const { 
        titlePage,
        dataProducts, 
        setDataProducts,
        totalRegister, 
        setTotalRegister,
        navigate,
        context,
     } = useProductPageModel();

    useEffect(()=>{
        getAllProducts();
    });

    function getAllProducts(){
        const allProducts = products
        const totalProducts = allProducts.length > 1 ? `${allProducts.length} registros` : `${allProducts.length} registro`;
        setDataProducts(allProducts);
        setTotalRegister(totalProducts);
    };

    function handleSelectionChange(ids: number[]){
        return ids;
    }

    return {
        titlePage,
        dataProducts, 
        totalRegister, 
        navigate,
        context,
        handleSelectionChange,
    }
}