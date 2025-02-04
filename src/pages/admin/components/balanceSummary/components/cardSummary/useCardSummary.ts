import { useBaseContextData } from "context/BaseContext";

export interface CardSummaryProps{
    summary: {value: number, description: string, color: string} | undefined
}

export function useCardSummary(){
    const context = useBaseContextData();

    return{context}
}