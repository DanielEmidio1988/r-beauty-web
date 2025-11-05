
import style from "./ChartData.module.scss";
import { useChartDataViewModel } from "./ChartDataViewModel";
import { ChartDataProps } from "./ChartDataTypes";
import IconLegend from "../iconlegend/IconLegend";
import { LineChart } from "@mui/x-charts";
import { Grid, Typography } from "@mui/material";

function ChartData(props: ChartDataProps){
    const {} = useChartDataViewModel(props);

    return(
        <Grid 
            container 
            size={12}
            className={style.chartdata}
        >
            <Grid
                container
                size={12}
                justifyContent="center"
                spacing={1}
            >
                <Typography component="p" variant="body2">
                    {props.titleChart}
                </Typography>
                <IconLegend 
                    legend={props.legend}
                    about="Sobre este indicador"
                />
            </Grid>
            <Grid container size={12}>
                <LineChart
                    xAxis={[{scaleType: 'point',  data: ["01/06", "02/06", "03/06", "04/06", "05/06", "06/06", "07/06"]}]}
                    series={props.data}
                />
            </Grid>

        </Grid>
    )
}

export default ChartData
