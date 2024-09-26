import { useState } from "react";
import MenuAdmin from "../../../components/menu-admin";
import BalanceSummary from "../../../components/dashboard/balanceSummary";
import LowInventory from "../../../components/dashboard/lowInventory";
import SalesPerformanceGraph from "../../../components/dashboard/salesPerformanceGraph";
import UpComingPayments from "../../../components/dashboard/upcomingPayments";
import style from "./HomeAdminPage.module.scss";

function HomeAdminPage(){
    return(
        <>
            <main className={`${style.homepageadmin}`}>
                <section className={`${style.dashboardSection} width_100 inner_padding_sm`}>
                    <MenuAdmin/>
                    <div className={`${style.dashboardSection___dashboardArea}`}>
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
                            <SalesPerformanceGraph/>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeAdminPage;