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
        const data: (string | number)[][] = [
            ["Dia", "Venda", "Volume"],
            ["01/10", 1000, 400],
            ["02/10", 2000, 600],
            ["03/10", 600, 300],
            ["04/10", 2500, 900],
            ["05/10", 3200, 1400],
            ["06/10", 5900, 2400],
        ];

        setBalanceSummary(data);
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