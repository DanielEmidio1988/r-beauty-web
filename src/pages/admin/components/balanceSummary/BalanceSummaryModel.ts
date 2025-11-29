import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "../../../../utils/hooks";
import { ISummary } from "./BalanceSummaryTypes";

export function useBalanceSummaryModel() {
    const context = useBaseContextProvider();
    
    return {
        context
    }
}
