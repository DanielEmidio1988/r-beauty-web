import { useSalesPerformance } from "./useSalesPerformance";
import Chart from "react-google-charts";
import style from "./SalesPerformance.module.scss"

function SalesPerformance(){
    /** componente para renderização de gráfico com performance de vendas dentro de um periodo
     * 
     */
    const logic = useSalesPerformance();

    return(
        <aside className={style.salesPerformanceGraph}>
            <p className={style.salesPerformanceGraph___title}>Relação de Vendas Ultimos 30 dias</p>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={logic.data}
                options={logic.options}
            />
        </aside>
    )
}

export default SalesPerformance;