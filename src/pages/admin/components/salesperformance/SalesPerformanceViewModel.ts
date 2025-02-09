import { useSalesPerformanceModel } from "./SalesPerformanceModel";
import { hooks } from "../../../../utils/hooks";

export function useSalesPerformanceViewModel(){
    const { data, dateNow, past30Days, options, setOptions } = useSalesPerformanceModel();

    function formatDate(date: Date): string{
        return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`
    }

    hooks.useEffect(() => {
        setOptions({
            chart: {
                title: "Performance de Vendas",
                subtitle: `Vendas entre ${formatDate(dateNow)} e ${formatDate(past30Days)}`
            }
        })
    },[]);

    return { data, options}
}