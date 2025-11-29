import { useState } from "react";
import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { IBrand } from "../../../../../types/IBrand";

export function useBrandPageModel(){
    const context = useBaseContextProvider();
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