import { useEffect } from "react";
import { useProductPageModel } from "./ProductPageModel";
import products from "../../../../../assets/data/products.json";

export function useProductPageViewModel(){
    const { 
        titlePage, 
        totalRegister, 
        navigate,
        context,
     } = useProductPageModel();


    function handleSelectionChange(ids: number[]){
        return ids;
    }

    return {
        titlePage, 
        totalRegister, 
        navigate,
        context,
        handleSelectionChange,
    }
}