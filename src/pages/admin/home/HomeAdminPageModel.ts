import { hooks } from "../../../utils/hooks";

export function useHomePageModel(){
    const [ balanceSummary, setBalanceSummary ] = hooks.useState([]);
    const [ lowInventory, setLowInventory ] = hooks.useState([]);
    const [ upComingPayment, setUpComingPayment ] = hooks.useState([]);
    const [ salesPerformance, setSalesPerformance ] = hooks.useState([]);

    return {
        balanceSummary,
        setBalanceSummary,
        lowInventory,
        setLowInventory,
        upComingPayment,
        setUpComingPayment,
        salesPerformance,
        setSalesPerformance
    };
}