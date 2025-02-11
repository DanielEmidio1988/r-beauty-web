
import style from "./ChartData.module.scss";
import { useChartDataViewModel } from "./ChartDataViewModel";
import { ChartDataProps } from "./ChartDataTypes";
import IconLegend from "../iconlegend/IconLegend";
import Chart from "react-google-charts";

function ChartData(props: ChartDataProps){
    const {} = useChartDataViewModel(props);

    return(
        <div className={style.chartdata}>
            <p className={style.chartdata___title}>
                {props.titleChart}
                <IconLegend 
                    legend={props.legend}
                />
            </p>
            <Chart 
                chartType={props.chartType}
                width="100%"
                height={300}
                data={props.data}
                options={props.options}
            />
        </div>
    )
}

export default ChartData
