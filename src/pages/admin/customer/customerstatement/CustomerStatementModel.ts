
import { useNavigate } from "react-router-dom";
import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { useState } from "react";
import { IDataCustomerStatement } from "./CustomerStatementTypes";
// import { } from "./CustomerStatementTypes";

export function useCustomerStatementModel(){
    const context = useBaseContextProvider();
    const navigate = useNavigate();
    const [customerStatement, setCustomerStatement] = useState<IDataCustomerStatement[]>([]);
    const [totalRegister, setTotalRegister] = useState<number>(0);
    const titlePage: string = "Extrato do cliente"

    return {
        context,
        navigate,
        customerStatement, 
        setCustomerStatement,
        totalRegister,
        setTotalRegister,
        titlePage,
    }
}
    