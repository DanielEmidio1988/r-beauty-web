import React from "react";
import style from "./UpComingPayments.module.scss";

//Daniel: componente para informe de pagamentos a vencer a partir dos próximos dias
function UpComingPayments(){
    return(
        <aside className={style.upcomingpayments}>
            <p className={style.upcomingpayments___title}>Pagamentos em Aberto</p>
            <table className={style.upcomingpayments___table} cellPadding={0} cellSpacing={0}>
                <tr>
                    <th className={style.upcomingpayments___table___title}>Cliente</th>
                    <th className={style.upcomingpayments___table___title}>Status</th>
                    <th className={style.upcomingpayments___table___title}>Valor</th>
                    <th className={style.upcomingpayments___table___title}>Vencimento</th>
                </tr>
                <tr className={`${style.upcomingpayments___table___tr} ${style.latepayment}`}>
                    <td className={`${style.upcomingpayments___table___data} ${style.nameclient}`}>
                        <span className={style.upcomingpayments___table___data___info}>Daniel Emidio da Silva</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <div className={style.upcomingpayments___table___data___progressbar}>
                            <div className={style.upcomingpayments___table___data___progressbar___inner} style={{width:'75%'}}>
                                <span className={style.upcomingpayments___table___data___progressbar___inner___number}>70%</span>
                            </div>
                        </div>  
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>R$ 50,00</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>24/09/2024</span>
                    </td>
                </tr>
                <tr className={style.upcomingpayments___table___tr}>
                    <td className={`${style.upcomingpayments___table___data} ${style.nameclient}`}>
                        <span className={style.upcomingpayments___table___data___info}>Alessandra Santos</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <div className={style.upcomingpayments___table___data___progressbar}>
                            <div className={style.upcomingpayments___table___data___progressbar___inner} style={{width:'50%'}}>
                                <span className={style.upcomingpayments___table___data___progressbar___inner___number}>50%</span>
                            </div>
                        </div>  
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>R$ 120,00</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>25/09/2024</span>
                    </td>
                </tr>
                <tr className={style.upcomingpayments___table___tr}>
                    <td className={`${style.upcomingpayments___table___data} ${style.nameclient}`}>
                        <span className={style.upcomingpayments___table___data___info}>Joana Felix</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <div className={style.upcomingpayments___table___data___progressbar}>
                            <div className={style.upcomingpayments___table___data___progressbar___inner} style={{width:'0%'}}>
                                <span className={style.upcomingpayments___table___data___progressbar___inner___number}>0%</span>
                            </div>
                        </div>  
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>R$ 40,00</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>27/09/2024</span>
                    </td>
                </tr>
                <tr className={style.upcomingpayments___table___tr}>
                    <td className={`${style.upcomingpayments___table___data} ${style.nameclient}`}>
                        <span className={style.upcomingpayments___table___data___info}>Fabio Onofre</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <div className={style.upcomingpayments___table___data___progressbar}>
                            <div className={style.upcomingpayments___table___data___progressbar___inner} style={{width:'90%'}}>
                                <span className={style.upcomingpayments___table___data___progressbar___inner___number}>90%</span>
                            </div>
                        </div>  
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>R$ 150,00</span>
                    </td>
                    <td className={style.upcomingpayments___table___data}>
                        <span className={style.upcomingpayments___table___data___info}>29/09/2024</span>
                    </td>
                </tr>
            </table>
        </aside>
    )
}

export default UpComingPayments;