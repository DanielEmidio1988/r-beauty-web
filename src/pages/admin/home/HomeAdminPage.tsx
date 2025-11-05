import BalanceSummary from "../components/balanceSummary/BalanceSummary";
import LowInventory from "../components/lowInventory/LowInventory";
import { ChartType } from "../../../components/chartdata/ChartDataTypes";
import UpComingPayments from "../components/upcomingPayments/UpComingPayments";
import style from "./HomeAdminPage.module.scss";
import { HomeAdminPageProps } from "./HomeAdminPageTypes";
import { useHomePageViewModel } from "./HomePageViewModel";
import ChartData from "../../../components/chartdata/ChartData";
import { Grid } from "@mui/material";

function HomeAdminPage(props: HomeAdminPageProps) {
    const { 
        balanceSummary, 
        lowInventory, 
        upComingPayment, 
        salesPerformance, 
        legendBalanceSum, 
        optionsBalanceSum
    } = useHomePageViewModel(props);

    return (
        <Grid 
            container 
            spacing={1}
            size={12} 
            className={style.homeadmin}
        >
            <Grid 
                container
                spacing={1}
                size={12} 
                component="section"
            >
                <Grid 
                    size={{xs: 12, sm: 6, md: 8}}
                >
                    <ChartData 
                        data={salesPerformance}
                        titleChart="Relação de Vendas Ultimos 30 dias"
                        chartType={ChartType.LINE}
                        legend={legendBalanceSum}
                        options={optionsBalanceSum}
                    />
                </Grid>
                <Grid 
                    className={style.dashboardArea__metricarea}
                    size={{xs: 12, sm: 6, md: 4}}
                >
                    <BalanceSummary 
                        summarys={balanceSummary}
                    />
                </Grid>
            </Grid>
            <Grid 
                container
                spacing={1}
                size={12}
                component="section"
            >
                <Grid 
                    size={{xs: 12, sm: 6}}
                >
                    <LowInventory />
                </Grid>
                <Grid 
                    size={{xs: 12, sm: 6}}
                >
                    <UpComingPayments />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeAdminPage;