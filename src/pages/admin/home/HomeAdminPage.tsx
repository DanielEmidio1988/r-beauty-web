import BalanceSummary from "../components/balanceSummary/BalanceSummary";
import LowInventory from "../components/lowInventory/LowInventory";
import { ChartType } from "../../../components/chartdata/ChartDataTypes";
import UpComingPayments from "../components/upcomingPayments/UpComingPayments";
import style from "./HomeAdminPage.module.scss";
import { HomeAdminPageProps } from "./HomeAdminPageTypes";
import { useHomePageViewModel } from "./HomePageViewModel";
import ChartData from "../../../components/chartdata/ChartData";

function HomeAdminPage(props: HomeAdminPageProps) {
    const { balanceSummary, lowInventory, upComingPayment, salesPerformance, legendBalanceSum, optionsBalanceSum} = useHomePageViewModel(props);

    return (
        <div className={style.homeadmin}>
            <section className={`${style.dashboardArea} ${style.sectionone}`}>
                <div className={style.dashboardArea__chartarea}>
                    <ChartData 
                        data={salesPerformance}
                        titleChart="Relação de Vendas Ultimos 30 dias"
                        chartType={ChartType.LINE}
                        legend={legendBalanceSum}
                        options={optionsBalanceSum}
                    />
                </div>
                <div className={style.dashboardArea__metricarea}>
                    <BalanceSummary 
                        summarys={balanceSummary}
                    />
                </div>
            </section>
            <section className={style.dashboardArea}>
                <div className={style.dashboardArea__lowinventory}>
                    <LowInventory />
                </div>
                <div className={style.dashboardArea__upcomingpayments}>
                    <UpComingPayments />
                </div>
            </section>
        </div>
    )
}

export default HomeAdminPage;