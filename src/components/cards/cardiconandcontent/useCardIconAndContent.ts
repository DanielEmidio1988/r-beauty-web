import { useBaseContextData } from "context/BaseContext";
import { hooks } from "@utils/hooks";

export interface CardIconAndContentProps{
    icon: JSX.Element;
    title: string;
    content: string;
}

export function useCardIconAndContent(){
    const context = useBaseContextData();

    return { context }
}