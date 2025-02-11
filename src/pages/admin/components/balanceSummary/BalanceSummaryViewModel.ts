import { useBalanceSummaryModel } from "./BalanceSummaryModel";
import { BalanceSummaryProps } from "./BalanceSummaryTypes";
import { hooks } from "../../../../utils/hooks";

export function useBalanceSummaryViewModel(props: BalanceSummaryProps){
    const { summarys, setSummarys } = useBalanceSummaryModel();


    return {
        summarys
    } 
}