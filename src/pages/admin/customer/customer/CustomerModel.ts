
import { useNavigate } from "react-router-dom";
import { useBaseContextData } from "context/BaseContext";
import { useState } from "react";
import { IDataCustomer } from "./CustomerTypes";
// import { } from "./CustomerTypes";

export function useCustomerModel(){
    const context = useBaseContextData();
    const navigate = useNavigate();
    const [dataCustomer, setDataCustomer] = useState<IDataCustomer[]>([]);
    const [totalRegister, setTotalRegister] = useState<number>(0);
    const titlePage = "Cadastro de cliente"

    return {
        context,
        navigate,
        titlePage,
        totalRegister,
        setTotalRegister,
        dataCustomer, 
        setDataCustomer
    }
}
    