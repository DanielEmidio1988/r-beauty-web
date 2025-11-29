import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "@utils/hooks";

export interface FooterProps{};

interface IMenu{
    item: string;
    tag: string;
}

export function useFooter(){
    const context = useBaseContextProvider();
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