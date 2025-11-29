
import { useCustomerStatementModel } from "./CustomerStatementModel";
import statementCustomer from "../../../../assets/data/statementcustomer.json"
import { useEffect } from "react";
// import { } from "./CustomerStatementTypes";

export function useCustomerStatementViewModel(){
    const { 
        navigate,
        customerStatement,
        setCustomerStatement, 
        totalRegister,
        setTotalRegister,
        titlePage,
    } =  useCustomerStatementModel();

    useEffect(() => {
        getAllCustomerStatement();
    })
   
    function getAllCustomerStatement(){
        setCustomerStatement(statementCustomer);
        setTotalRegister(statementCustomer.length);
    }

    return{ 
        navigate,
        customerStatement,
        totalRegister,
        titlePage,
     }
}
    