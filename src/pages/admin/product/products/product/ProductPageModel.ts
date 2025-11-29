import { useNavigate } from "react-router-dom";
import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";

export function useProductPageModel(){
    const navigate = useNavigate();
    const context = useBaseContextProvider();

    return {
        navigate,
        context,
    };
}