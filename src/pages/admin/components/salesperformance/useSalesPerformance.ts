import { hooks } from "../../../../utils/hooks";
import { IOptionsChart } from "../../../../types/IDashboard";

export function useSalesPerformance(){
    const data: (string | number)[][] = [
        ["Dia", "Venda", "Volume"],
        ["01/10", 1000, 400],
        ["02/10", 2000, 600],
        ["03/10", 600, 300],
        ["04/10", 900, 400]
    ];

    const [options, setOptions] = hooks.useState<IOptionsChart>({
            chart: {
                title: "Performance de Vendas",
                subtitle: "Vendas entre 01/10 e 04/10"
            }
        });

    return {data, options, setOptions}
}