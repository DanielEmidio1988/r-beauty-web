import { useState } from "react";
import MenuAdmin from "../../../components/menu-admin";
import BalanceSummary from "../dashboard/balanceSummary";
import LowInventory from "../dashboard/lowInventory";
import SalesPerformanceGraph from "../dashboard/salesPerformanceGraph";
import UpComingPayments from "../dashboard/upcomingPayments";
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
                        <article className={`width_100`}>
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