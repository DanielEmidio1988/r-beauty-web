import { useBaseContextData } from "context/BaseContext";
import { hooks } from "@utils/hooks";

export interface FooterProps{};

interface IMenu{
    item: string;
    tag: string;
}

export function useFooter(){
    const context = useBaseContextData();
    const menus: IMenu[] = [
        {
            item: "Sobre",
            tag: "#about"
        },
        {
            item: "Nossos Recursos",
            tag: "#ourresources"
        },
        {
            item: "Duvidas Frequentes",
            tag: "#faq"
        }
    ]

    return { context, menus }
}