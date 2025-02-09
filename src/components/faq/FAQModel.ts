import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../utils/hooks";

export function useFAQModel() {
    const context = useBaseContextData();
    const [activeQuestion, setActiveQuestion] = hooks.useState<number | null>(null);

    return { context, activeQuestion, setActiveQuestion }
}