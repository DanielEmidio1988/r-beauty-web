import { hooks } from "../../../../utils/hooks";
import { ISummary } from "./BalanceSummaryTypes";

export function useBalanceSummaryModel() {
    const [summarys, setSummarys] = hooks.useState<ISummary[]>([]);
    const [loading, setLoading] = hooks.useState<boolean>(false);

    return {
        summarys, 
        setSummarys,
        loading, 
        setLoading,
    }
}
