
import { useNavigate } from "react-router-dom";
import { useBaseContextData } from "context/BaseContext";
// import { } from "./CustomerTypes";

export function useCustomerModel(){
    const context = useBaseContextData();
    const navigate = useNavigate();

    return {
        context,
        navigate,
    }
}
    