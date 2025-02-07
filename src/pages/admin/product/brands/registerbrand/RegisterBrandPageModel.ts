import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../../utils/hooks";
import { IBrand } from "../../../../../types/IBrand";

export function useRegisterBrandPageModel(){
    const context = useBaseContextData();
    const titlePage: string = "Cadastro de Marcas";
    const [dataBrands, setDataBrands] = hooks.useState<IBrand[] | []>([]);
    const [totalRegister, setTotalRegister] = hooks.useState<String>("0 registro");

    return{
        context, 
        titlePage, 
        dataBrands, 
        setDataBrands,
        totalRegister,
        setTotalRegister,
    }
}