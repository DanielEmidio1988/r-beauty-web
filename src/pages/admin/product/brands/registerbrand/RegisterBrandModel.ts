
import { useNavigate } from "react-router-dom";
import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
// import { } from "./RegisterBrandTypes";

export function useRegisterBrandModel(){
    const context = useBaseContextProvider();
    const navigate = useNavigate();

    return {
        context,
        navigate,
    }
}
    