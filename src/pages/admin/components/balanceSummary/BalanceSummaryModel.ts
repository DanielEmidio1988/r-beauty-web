import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../utils/hooks";
import { ISummary } from "./BalanceSummaryTypes";

export function useBalanceSummaryModel() {
    const context = useBaseContextData();
    
    return {
        context
    }
}
