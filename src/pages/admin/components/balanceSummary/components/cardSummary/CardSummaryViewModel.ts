import { CardSummaryProps } from "./CardSummaryTypes";
import { useBaseContextData } from "context/BaseContext";

export function useCardSummaryViewModel(props: CardSummaryProps){
    const context = useBaseContextData();

    return {context}
}