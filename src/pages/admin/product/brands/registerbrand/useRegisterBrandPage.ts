import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../../utils/hooks";
import { IBrand } from "../../../../../types/IBrand";
import brands from '../../../../../assets/data/brand.json';

export interface RegisterBrandPageProps{};

export function useRegisterBrandPage(){
    const context = useBaseContextData();
    const titlePage: string = "Cadastro de Marcas";
    const [dataBrands, setDataBrands] = hooks.useState<IBrand[] | []>([]);
    const [totalRegister, setTotalRegister] = hooks.useState<String>("0 registro");

    hooks.useEffect(()=>{       
        getAllBrands();    
    },[]);

    //Daniel: provisório
    function getAllBrands() {
        const allBrands = brands;
        const totalBrands = allBrands.length > 1 ? `${allBrands.length} registros` : `${allBrands.length} registro`;
        setDataBrands(allBrands);
        setTotalRegister(totalBrands);
    }

    function newBrand() {
        //cadastro de marca
    }

    function filterBrand() {
        //filtro de marca
    }

    return{context, titlePage, dataBrands, setDataBrands, totalRegister, setTotalRegister}
}