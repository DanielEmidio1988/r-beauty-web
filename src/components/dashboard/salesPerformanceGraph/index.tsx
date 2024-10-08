import React, { useState } from "react";
import Chart from "react-google-charts";
import { IOptionsChart } from "../../../types/IDashboard";
import style from "./SalesPerformanceGraph.module.scss"

//Daniel: componente para renderização de gráfico com performance de vendas dentro de um periodo
function SalesPerformanceGraph(){

    const data: (string | number)[][] = [
        ["Dia", "Venda", "Volume"],
        ["01/10", 1000, 400],
        ["02/10", 2000, 600],
        ["03/10", 600, 300],
        ["04/10", 900, 400]
    ]

    const [options, setOptions] = useState<IOptionsChart>({
        chart: {
            title: "Performance de Vendas",
            subtitle: "Vendas entre 01/10 e 04/10"
        }
    });

    return(
        <aside className={style.salesPerformanceGraph}>
            <p className={style.salesPerformanceGraph___title}>Relação de Vendas Ultimos 30 dias</p>
            <Chart 
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </aside>
    )
}

export default SalesPerformanceGraph;