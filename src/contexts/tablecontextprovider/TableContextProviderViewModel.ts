import mockProducts from "../../assets/data/productsData.json"

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

    return{
        fetchDataTable,
    }
}