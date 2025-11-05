import { useState } from "react";
import { useBaseContextData } from "context/BaseContext";
import { IBrand } from "../../../../../types/IBrand";

export function useBrandPageModel(){
    const context = useBaseContextData();
    const titlePage: string = "Cadastro de Marcas";
    const [dataBrands, setDataBrands] = useState<IBrand[] | []>([]);
    const [totalRegister, setTotalRegister] = useState<String>("0 registro");

    return{
        context, 
        titlePage, 
        dataBrands, 
        setDataBrands,
        totalRegister,
        setTotalRegister,
    }
}