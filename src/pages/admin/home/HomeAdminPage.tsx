import BalanceSummary from "../components/balanceSummary/BalanceSummary";
import LowInventory from "../components/lowInventory/LowInventory";
import SalesPerformance from "../components/salesperformance/SalesPerformance";
import { ChartType } from "../components/salesperformance/SalesPerformanceTypes";
import UpComingPayments from "../components/upcomingPayments/UpComingPayments";
import style from "./HomeAdminPage.module.scss";
import { HomeAdminPageProps } from "./HomeAdminPageTypes";
import { useHomePageViewModel } from "./HomePageViewModel";

function HomeAdminPage(props: HomeAdminPageProps) {
    const { balanceSummary, lowInventory, upComingPayment, salesPerformance, } = useHomePageViewModel(props);

    return (
        <div className={style.homeadmin}>
            <section className={`${style.dashboardArea} ${style.sectionone}`}>
                <div className={style.dashboardArea__chartarea}>
                    <SalesPerformance 
                        data={balanceSummary}
                        chartType={ChartType.LINE}
                    />
                </div>
                <div className={style.dashboardArea__metricarea}>
                    <BalanceSummary />
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