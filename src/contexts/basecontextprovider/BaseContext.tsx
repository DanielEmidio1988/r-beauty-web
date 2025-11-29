import {createContext, useContext, useState,} from "react"
import { IBaseContextProvider, IBaseContextProviderProps, IFormatMoney } from "./BaseContextTypes";

const Context = createContext<IBaseContextProvider | undefined>(undefined);

export function BaseContextProvider({children}: IBaseContextProviderProps){
    const [formatMoney, setFormatMoney] = useState<IFormatMoney>({
        format: "pt-BR",
        currency: "BRL"
    })

    return(
        <Context.Provider value={{
            formatMoney, 
            setFormatMoney,
        }}>
            {children}
        </Context.Provider>
    ) 
}

export const useBaseContextProvider = () => {
    const context = useContext(Context);
    if(context === undefined){
        throw new Error('useBaseContextProvider deve ser usado dentro de um ProviderData')
    }

    return context
}