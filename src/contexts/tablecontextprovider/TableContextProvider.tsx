import { CustomTable } from "@components/customtable/CustomTable";
import { ITableContextProviderProps, ITableContextProvider } from "./TableContextProviderTypes";
import { createContext, useContext } from "react";
import { useTableContextProviderViewModel } from "./TableContextProviderViewModel";

const Context = createContext<ITableContextProvider<unknown> | undefined>(undefined);

export function TableContextProvider<T>({params}: ITableContextProviderProps<T>){

    const { fetchDataTable } = useTableContextProviderViewModel();
    const fetchData = () => fetchDataTable(params.endpoint);

    // Incluir React Query para fetchData

    return(
        <Context.Provider value={{fetchData: () => fetchData()}}>
            <CustomTable
                ariaLabel={params.label}
                headers={[]}
                rows={[]}
                checkbox={params.checkbox || false}
            />
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