import { SeriesChart } from "@components/chartdata/ChartDataTypes";
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
        const data: SeriesChart = [
            {
                data: [2200, 600, 1200, 1500, 1400, 1600, 2500].map(Number),
                label: "Vendas Jun/06",
                curve: "linear",
            },
            {
                data: [2300, 1100, 800, 750, 1800, 1800, 2300].map(Number),
                label: "Vendas Mai/06",
                curve: "linear",
            },
        ];
        setSalesPerformance(data)
    }

    function formatDate(date: Date): string {
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