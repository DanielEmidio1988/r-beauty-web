import MenuAdmin from "../../../components/menuadmin/MenuAdmin";
import BalanceSummary from "../components/balanceSummary/BalanceSummary";
import LowInventory from "../components/lowInventory/LowInventory";
import SalesPerformance from "../components/salesperformance/SalesPerformance";
import UpComingPayments from "../components/upcomingPayments/UpComingPayments";
import style from "./HomeAdminPage.module.scss";

function HomeAdminPage(){
    return(
        <>
            <main className={`${style.homepageadmin} pageadmin`}>
                <section className={`${style.dashboardSection} width_100 inner_padding_sm sectionarea_admin`}>
                    <MenuAdmin/>
                    <div className={`${style.dashboardSection___dashboardArea} dataarea`}>
                        <article className={`width_100`}>
                            <BalanceSummary/>
                        </article>
                        <article className={`${style.dashboardSection___dashboardArea___doublecolumn} width_100`}>
                            <aside className={`width_40`}>
                                <LowInventory/>
                            </aside>
                            <aside className={`width_60`}>
                                <UpComingPayments/>
                            </aside> 
                        </article>
                        <article className={`width_100`}>
                            <SalesPerformance/>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeAdminPage;