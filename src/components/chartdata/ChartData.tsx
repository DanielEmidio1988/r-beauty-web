
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
                    series={[
                        {
                            data: [2200, 600, 1200, 1500, 1400, 1600, 2500],
                            label: "Vendas",
                            curve: "linear",
                        },
                        {
                            data: [26, 20, 18, 19, 17, 18, 22],
                            label: "Volume",
                            curve: "linear",
                        },
                    ]}
                />
            </Grid>

        </Grid>
    )
}

export default ChartData
