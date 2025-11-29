import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "../../utils/hooks";

export function useFAQModel() {
    const context = useBaseContextProvider();
    const [activeQuestion, setActiveQuestion] = hooks.useState<number | null>(null);

    return { context, activeQuestion, setActiveQuestion }
}