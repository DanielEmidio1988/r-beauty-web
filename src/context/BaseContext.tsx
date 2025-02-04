import React, {createContext, ReactNode,} from "react"
import { hooks } from "@utils/hooks";

interface IFormatMoney{
    format: string;
    currency: string;
}

interface ContextData{
    activeModal: Boolean; //remover
    setActiveModal: React.Dispatch<React.SetStateAction<Boolean>>; //remover
    formatMoney: IFormatMoney;
    setFormatMoney: React.Dispatch<React.SetStateAction<IFormatMoney>>;
}

interface ProviderProps {
    children: ReactNode;
}

const Context = createContext<ContextData | undefined>(undefined);

export function ProviderData({children}: ProviderProps){
    const [activeModal, setActiveModal] = hooks.useState<Boolean>(false);
    const [formatMoney, setFormatMoney] = hooks.useState<IFormatMoney>({
        format: "pt-BR",
        currency: "BRL"
    })

    return(
        <Context.Provider value={{
            activeModal,
            setActiveModal,
            formatMoney, 
            setFormatMoney,
        }}>
            {children}
        </Context.Provider>
    ) 
}

export const useBaseContextData = () => {
    const context = hooks.useContext(Context);
    if(context === undefined){
        throw new Error('useBaseContextData deve ser usado dentro de um ProviderData')
    }

    return context
}