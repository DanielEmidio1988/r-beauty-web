import mockProducts from "../../assets/data/productsData.json"

import mockHeaderColumnsProducts from "../../assets/data/headerProductsData.json";
import { IHeadersAndColumns, IHeadersAndColumnsResponse } from "./TableContextProviderTypes";

export function useTableContextProviderViewModel(){

    function fetchDataTable<T>(endpoint: string): T{
        // switch/case temporario

        if(!endpoint) return [] as T;

        let mockItem;

        switch (endpoint) {
            case "products":
                mockItem = mockProducts;
                break;
            default:
                mockItem = { data: { data: []}}
                break;
        }

        const response = mockItem;

        return response.data.data as T;
    }

    async function fetchHeadersAndColumns(endpoint: string): Promise<IHeadersAndColumns>{
        const response: IHeadersAndColumnsResponse = await mockHeaderColumnsProducts;

        if(response.status >= 200 && response.status <= 299){
            return {
                headers: [],
                transactions: [],
            }
        }

        return response.data.data;

    }

    return{
        fetchDataTable,
        fetchHeadersAndColumns,
    }
}