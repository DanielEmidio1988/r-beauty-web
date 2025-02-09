import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../../utils/hooks";
import { IProduct } from "../../../../../types/IProduct";

export function useProductPageModel(){
    const titlePage: string = "Cadastro de Produtos";
    const [ dataProducts, setDataProducts ] = hooks.useState<IProduct[] | []>([]);
    const [totalRegister, setTotalRegister] = hooks.useState<String>("0 registro");
    const navigate = hooks.useNavigate();
    const context = useBaseContextData();

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