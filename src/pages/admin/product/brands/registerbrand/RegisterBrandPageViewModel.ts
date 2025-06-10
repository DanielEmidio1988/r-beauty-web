import { useRegisterBrandPageModel } from "./RegisterBrandPageModel";
import brands from '../../../../../assets/data/brand.json';
import { useEffect } from "react";

export function useRegisterBrandPageViewModel(){
    const {
        context, 
        titlePage, 
        dataBrands, 
        setDataBrands,
        totalRegister,
        setTotalRegister,
    } = useRegisterBrandPageModel();

    useEffect(() => {
        getAllBrands();
    },[])
    
    function getAllBrands() {
        const allBrands = brands;
        const totalBrands = allBrands.length > 1 ? `${allBrands.length} registros` : `${allBrands.length} registro`;
        setDataBrands(allBrands);
        setTotalRegister(totalBrands);
    }

    function newBrand() {
        //cadastro de marca
    }

    function filterBrand() {
        //filtro de marca
    }

    return{
        context, 
        titlePage, 
        dataBrands, 
        totalRegister,
        getAllBrands,
    }
}