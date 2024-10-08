import React from "react";
import style from "./BalanceSummary.module.scss"

//Daniel: componente para renderização do resumo de Saldo Financeiro
function BalanceSummary(){

    function getBalanceSummary(){
        //Função para buscar dados do balanço financeiro resumido
    }

    return(
        <aside className={`${style.balanceSummary} width_100`}>
            <div className={style.balanceSummary___item}>
                <h4 className={style.balanceSummary___item___value}>R$ 10.000</h4>
                <p className={style.balanceSummary___item___description}>Em vendas</p>
            </div>
            <div className={style.balanceSummary___item}>
                <h4 className={style.balanceSummary___item___value}>R$ 2.800</h4>
                <p className={style.balanceSummary___item___description}>A Receber</p>
            </div>
            <div className={style.balanceSummary___item}>
                <h4 className={style.balanceSummary___item___value}>R$ 15.000</h4>
                <p className={style.balanceSummary___item___description}>A Pagar</p>
            </div>
        </aside>
    )
}

export default BalanceSummary;