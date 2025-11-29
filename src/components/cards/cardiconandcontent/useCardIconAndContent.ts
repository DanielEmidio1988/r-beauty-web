import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "@utils/hooks";

export interface CardIconAndContentProps{
    icon: JSX.Element;
    title: string;
    content: string;
}

export function useCardIconAndContent(){
    const context = useBaseContextProvider();

    return { context }
}