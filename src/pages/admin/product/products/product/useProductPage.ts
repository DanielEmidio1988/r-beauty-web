import { useBaseContextData } from "context/BaseContext";
import { useNavigate } from "react-router-dom";
import { hooks } from "../../../../../utils/hooks";
import { IProduct } from "../../../../../types/IProduct";
import products from "../../../../../assets/data/products.json";

interface ILegend{
    name: string;
    legend: string;
}

interface IOption{
    name: string;
    label: string; 
}

interface IProductFields {
    name: string;
    label: string;
    legend: string;
    type: string;
    options?: []
}

export interface ProductPageProps{};

export function useProductPage(){
    const titlePage: string = "Cadastro de Produtos";
    const [dataProducts, setDataProducts] = hooks.useState<IProduct[] | []>([]);
    const [totalRegister, setTotalRegister] = hooks.useState<String>("0 registro");
    const navigate = useNavigate();
    const context = useBaseContextData();

    hooks.useEffect(()=>{
        getAllProducts();
    });

    function getAllProducts(){
        const allProducts = products
        const totalProducts = allProducts.length > 1 ? `${allProducts.length} registros` : `${allProducts.length} registro`;
        setDataProducts(allProducts);
        setTotalRegister(totalProducts);
    };

    function goToEditProduct(){

    };

    function filterProduct(){

    };
    

    return{titlePage, dataProducts, setDataProducts, totalRegister, setTotalRegister, navigate, context, getAllProducts}
}