import { IOptionsChart } from "../../../components/chartdata/ChartDataTypes";
import { hooks } from "../../../utils/hooks";
import { ISummary } from "../components/balanceSummary/BalanceSummaryTypes";

export function useHomePageModel() {
    const [balanceSummary, setBalanceSummary] = hooks.useState<ISummary[]>([]);
    const [lowInventory, setLowInventory] = hooks.useState([]);
    const [upComingPayment, setUpComingPayment] = hooks.useState([]);
    const [salesPerformance, setSalesPerformance] = hooks.useState<(number | string)[][]>([]);
    const legendBalanceSum: string = `Este indicador apresenta o total de vendas dos últimos 30 dias, exibindo tanto o volume quanto o valor. 
                        O volume corresponde à quantidade de itens vendidos, enquanto o valor representa o montante financeiro das vendas no período.`
    const [optionsBalanceSum, setOptionsBalanceSum] = hooks.useState<IOptionsChart>({
        chart: {
            title: "Performance de Vendas",
            subtitle: ``
        }
    });
    const dateNow = new Date();
    const past30Days = new Date(dateNow.getTime() - 30 * 24 * 60 * 60 * 1000);

    return {
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
    };
}