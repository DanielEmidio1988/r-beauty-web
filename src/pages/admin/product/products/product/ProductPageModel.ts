import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { IProduct } from "../../../../../types/IProduct";

export function useProductPageModel(){
    const titlePage: string = "Cadastro de Produtos";
    const [ dataProducts, setDataProducts ] = useState<IProduct[] | []>([]);
    const [totalRegister, setTotalRegister] = useState<String>("0 registro");
    const navigate = useNavigate();
    const context = useBaseContextProvider();

    return {
        titlePage,
        dataProducts, 
        setDataProducts,
        totalRegister, 
        setTotalRegister,
        navigate,
        context,
    };
}