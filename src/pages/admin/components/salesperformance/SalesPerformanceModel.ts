import { hooks } from "../../../../utils/hooks";
import { IOptionsChart } from "../../../../types/IDashboard";

export function useSalesPerformanceModel(){
    const data: (string | number)[][] = [
        ["Dia", "Venda", "Volume"],
        ["01/10", 1000, 400],
        ["02/10", 2000, 600],
        ["03/10", 600, 300],
        ["04/10", 2500, 900],
        ["05/10", 3200, 1400],
        ["06/10", 5900, 2400],
    ];
    const dateNow = new Date();
    const past30Days = new Date(dateNow.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [options, setOptions] = hooks.useState<IOptionsChart>({
        chart: {
            title: "Performance de Vendas",
            subtitle: ``
        }
    });

    return { data, dateNow, past30Days, options, setOptions };
}