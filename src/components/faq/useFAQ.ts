import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../utils/hooks";
import { IFaq } from "./interfaces/IFaq";

export interface FAQProps {
    faqData: IFaq[];
}

export function useFAQ() {
    const context = useBaseContextData();
    const [activeQuestion, setActiveQuestion] = hooks.useState<number | null>(null);

    function setQuestionFAQ(index: number) {
        setActiveQuestion(activeQuestion === index ? null : index);
    }

    return { context, activeQuestion, setActiveQuestion, setQuestionFAQ }
}