
import { useEffect } from "react";
import { useCustomerModel } from "./CustomerModel";
import customers from "../../../../assets/data/client.json";

// import { } from "./CustomerTypes";

export function useCustomerViewModel(){
    const { 
        navigate, 
        titlePage, 
        totalRegister, 
        setTotalRegister,
        dataCustomer, 
        setDataCustomer,
    } =  useCustomerModel();

    useEffect(() => {
        getAllCustomers();
    },[])
    
    function getAllCustomers(){
        setDataCustomer(customers);
        setTotalRegister(customers.length);
    }

    return{ 
        navigate, 
        titlePage, 
        totalRegister,
        dataCustomer,
    }
}
    