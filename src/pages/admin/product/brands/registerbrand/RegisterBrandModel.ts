
import { useNavigate } from "react-router-dom";
import { useBaseContextData } from "context/BaseContext";
// import { } from "./RegisterBrandTypes";

export function useRegisterBrandModel(){
    const context = useBaseContextData();
    const navigate = useNavigate();

    return {
        context,
        navigate,
    }
}
    