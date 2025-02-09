import Chart from "react-google-charts";
import style from "./SalesPerformance.module.scss";
import IconLegend from "../../../../components/iconlegend/IconLegend";
import { useSalesPerformanceViewModel } from "./SalesPerformanceViewModel";
import { SalesPerformanceProps } from "./SalesPerformanceTypes";

function SalesPerformance(props: SalesPerformanceProps){
    const { options } = useSalesPerformanceViewModel();
    // Trocar componente, tipo global, nome ChartData
    return(
        <aside className={style.salesPerformanceGraph}>
            <p className={style.salesPerformanceGraph___title}>
                Relação de Vendas Ultimos 30 dias
                <IconLegend 
                    legend={
                        `Este indicador apresenta o total de vendas dos últimos 30 dias, exibindo tanto o volume quanto o valor. 
                        O volume corresponde à quantidade de itens vendidos, enquanto o valor representa o montante financeiro das vendas no período.`
                    }
                />
            </p>
            <Chart 
                chartType={props.chartType}
                width="100%"
                height={300}
                data={props.data}
                options={options}
            />
        </aside>
    )
}

export default SalesPerformance;