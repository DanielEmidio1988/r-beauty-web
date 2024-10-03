import React, {createContext, useContext, useState, ReactNode, useEffect} from "react"

interface ContextData{
    activeModal: Boolean;
    setActiveModal: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface ProviderProps {
    children: ReactNode;
}

const Context = createContext<ContextData | undefined>(undefined);

export function ProviderData({children}: ProviderProps){
    const [activeModal, setActiveModal] = useState<Boolean>(false);

    return(
        <Context.Provider value={{
            activeModal,
            setActiveModal
        }}>
            {children}
        </Context.Provider>
    ) 
}

export const useContextData = () => {
    const context = useContext(Context);
    if(context === undefined){
        throw new Error('useContextData deve ser usado dentro de um ProviderData')
    }

    return context
}