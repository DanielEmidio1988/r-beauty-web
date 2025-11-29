import { useEffect } from "react";
import { useProductPageModel } from "./ProductPageModel";
import products from "../../../../../assets/data/products.json";

export function useProductPageViewModel(){
    const { 
        navigate,
        context,
     } = useProductPageModel();


    function handleSelectionChange(ids: number[]){
        return ids;
    }

    return {
        navigate,
        context,
        handleSelectionChange,
    }
}