import { hooks } from "../../utils/hooks";
import { useFAQModel } from "./FAQModel";
import { FAQProps } from "./FAQTypes";

export function useFAQViewModel(props: FAQProps){
    const { context, activeQuestion, setActiveQuestion } = useFAQModel();

    function setQuestionFAQ(index: number) {
        setActiveQuestion(activeQuestion === index ? null : index);
    }

    return{ context, activeQuestion, setActiveQuestion, setQuestionFAQ }
}