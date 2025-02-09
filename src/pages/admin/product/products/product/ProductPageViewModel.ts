import { hooks } from "../../../../../utils/hooks";
import { useProductPageModel } from "./ProductPageModel";
import products from "../../../../../assets/data/products.json";

export function useProductPageViewModel(){
    const { 
        titlePage,
        dataProducts, 
        setDataProducts,
        totalRegister, 
        setTotalRegister,
        navigate,
        context,
     } = useProductPageModel();

    hooks.useEffect(()=>{
        getAllProducts();
    });

    function getAllProducts(){
        const allProducts = products
        const totalProducts = allProducts.length > 1 ? `${allProducts.length} registros` : `${allProducts.length} registro`;
        setDataProducts(allProducts);
        setTotalRegister(totalProducts);
    };

    return {
        titlePage,
        dataProducts, 
        totalRegister, 
        navigate,
        context,
    }
}