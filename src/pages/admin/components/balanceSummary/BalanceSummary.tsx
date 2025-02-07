import style from "./BalanceSummary.module.scss";
import CardSummary from "./components/cardSummary/CardSummary";
import { useBalanceSummaryViewModel } from "./BalanceSummaryViewModel";
import { BalanceSummaryProps } from "./BalanceSummaryTypes";

//Daniel: componente para renderização do resumo de Saldo Financeiro
function BalanceSummary(props: BalanceSummaryProps){
    const { summarys } = useBalanceSummaryViewModel(props);   

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