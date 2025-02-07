import { hooks } from "../../../utils/hooks";
import { useHomePageModel } from "./HomeAdminPageModel";
import { HomeAdminPageProps } from "./HomeAdminPageTypes";


export function useHomePageViewModel(props: HomeAdminPageProps){
    const {
        balanceSummary,
        setBalanceSummary,
        lowInventory,
        setLowInventory,
        upComingPayment,
        setUpComingPayment,
        salesPerformance,
        setSalesPerformance
    } = useHomePageModel();

    function getBalanceSummary(){
        
    }

    function getLowInventory(){

    } 

    function getUpComingPayments(){

    }

    function getSalesPerformance(){

    }

    hooks.useEffect(() => {
        getBalanceSummary();
        getLowInventory();
        getUpComingPayments();
        getSalesPerformance();
    }, [])

    return{
        balanceSummary,
        lowInventory,
        upComingPayment,
        salesPerformance,
    };
}