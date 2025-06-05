import { hooks } from "../../../utils/hooks";
import { ISummary } from "../components/balanceSummary/BalanceSummaryTypes";
import { useHomePageModel } from "./HomeAdminPageModel";
import { HomeAdminPageProps } from "./HomeAdminPageTypes";


export function useHomePageViewModel(props: HomeAdminPageProps) {
    const {
        balanceSummary,
        setBalanceSummary,
        lowInventory,
        setLowInventory,
        upComingPayment,
        setUpComingPayment,
        salesPerformance,
        setSalesPerformance,
        legendBalanceSum,
        optionsBalanceSum,
        setOptionsBalanceSum,
        dateNow,
        past30Days
    } = useHomePageModel();

    function getBalanceSummary() {
        const data: ISummary[] = [
            {
                value: 10000,
                description: "Em vendas",
                color: "#B5E61D",
                growthSummary: 7.24,
                labelGrowthSummary: "desde o ultimo mês"
            },
            {
                value: 2800,
                description: "A receber",
                color: "#6496D1",
                growthSummary: -2.89,
                labelGrowthSummary: "desde o ultimo mês"
            },
            {
                value: 15000,
                description: "Meta",
                color: "#FA5D7C",
                growthSummary: 66.33,
                labelGrowthSummary: "da meta atingida"

            }
        ];

        setBalanceSummary(data);
    }

    function getLowInventory() {

    }

    function getUpComingPayments() {

    }

    function getSalesPerformance() {
        const data: (string | number)[][] = [
            ["Dia", "Venda", "Volume"],
            ["01/10", 1000, 400],
            ["02/10", 2000, 600],
            ["03/10", 600, 300],
            ["04/10", 2500, 900],
            ["05/10", 3200, 1400],
            ["06/10", 5900, 2400],
        ];
        setSalesPerformance(data)
    }

    function formatDate(date: Date): string{
        return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`
    };

    hooks.useEffect(() => {
        getBalanceSummary();
        getLowInventory();
        getUpComingPayments();
        getSalesPerformance();
        setOptionsBalanceSum({
            chart: {
                title: "Performance de Vendas",
                subtitle: `Vendas entre ${formatDate(dateNow)} e ${formatDate(past30Days)}`
            }
        })
    }, [])

    return {
        balanceSummary,
        lowInventory,
        upComingPayment,
        salesPerformance,
        legendBalanceSum,
        optionsBalanceSum
    };
}