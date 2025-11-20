import mockProducts from "../../assets/data/productsData.json"

import mockHeaderColumnsProducts from "../../assets/data/headerProductsData.json";
import { IHeadersAndColumns, IHeadersAndColumnsResponse } from "./TableContextProviderTypes";
import { IRows } from "@components/customtable/CustomTableTypes";

export function useTableContextProviderViewModel() {

    function fetchDataTable(endpoint: string): IRows[] {
        // switch/case temporario

        if (!endpoint) return [];

        let mockItem;

        switch (endpoint) {
            case "products":
                mockItem = mockProducts;
                break;
            default:
                mockItem = { data: { data: [] } }
                break;
        }

        const response = mockItem;

        return response.data.data;
    }

    async function fetchHeadersAndColumns(endpoint: string): Promise<IHeadersAndColumns> {
        const response: IHeadersAndColumnsResponse = await mockHeaderColumnsProducts;

        if (response.status >= 200 && response.status <= 299) {
            return response.data.data;
        }

        return {
            headers: [],
            transactions: [],
        }

    }

    return {
        fetchDataTable,
        fetchHeadersAndColumns,
    }
}