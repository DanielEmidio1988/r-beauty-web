import React, {useState} from "react";
import style from "./BalanceSummary.module.scss";
import CardSummary from "./cardSummary";

interface ISummary{
    value: number,
    description: string,
    color: string,
}

//Daniel: componente para renderização do resumo de Saldo Financeiro
function BalanceSummary(){
    const [summarys, setSummarys] = useState<ISummary[]>([
        {
            value: 10000,
            description: "Em vendas",
            color: "#B5E61D"
        },
        {
            value: 2800,
            description: "A receber",
            color: "#6496D1"
        },
        {
            value: 15000,
            description: "A pagar",
            color: "#FA5D7C"
        }
    ])

    function getBalanceSummary(){
        //Função para buscar dados do balanço financeiro resumido
    }

    return(
        <aside className={`${style.balanceSummary} width_100`}>
            {summarys && summarys.map((summary, index)=>{
                return(
                    <CardSummary 
                        key={index}
                        summary={summary}
                    />
                )
            })}
        </aside>
    )
}

export default BalanceSummary;