import { CustomTable } from "@components/customtable/CustomTable";
import { ITableContextProviderProps, ITableContextProvider } from "./TableContextProviderTypes";
import { createContext, useContext } from "react";
import { useTableContextProviderViewModel } from "./TableContextProviderViewModel";
import { useQuery } from "@tanstack/react-query";
import { IRows } from "@components/customtable/CustomTableTypes";

const Context = createContext<ITableContextProvider<unknown> | undefined>(undefined);

export function TableContextProvider<T>({params}: ITableContextProviderProps<T>){

    const { fetchDataTable, fetchHeadersAndColumns } = useTableContextProviderViewModel();
    const getDataTable = () => fetchDataTable(params.endpoint);
    const getHeadersAndColumns = () => fetchHeadersAndColumns(params.endpoint);

    const {data: columnAndHeaders, isPending: loadingHeaders } = useQuery({
        queryKey: [`get-header-and-column-${params.endpoint}`],
        queryFn: () => getHeadersAndColumns(),
    });

    const {data: rowsTable, isPending: loadingRows } = useQuery<IRows[]>({
        queryKey: [`get-rows-table-${params.endpoint}`],
        queryFn: () => getDataTable(),
        enabled: !!columnAndHeaders?.headers?.length
    });

    return(
        <Context.Provider value={{fetchData: () => getDataTable()}}>
            {columnAndHeaders && (
                <CustomTable
                    ariaLabel={params.label}
                    actionLabel={params.actionLabel}
                    headers={columnAndHeaders}
                    rows={rowsTable || ([] as IRows[])}
                    checkbox={params.checkbox || false}
                    loading={loadingHeaders && loadingRows}
                />
            )}
        </Context.Provider>
    ) 
}

export const useTableContextProvider = () => {
    const context = useContext(Context);
    if(context === undefined){
        throw new Error('useTableContextProvider deve ser usado dentro de um ProviderData')
    }

    return context
}