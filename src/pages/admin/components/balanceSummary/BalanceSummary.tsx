import style from "./BalanceSummary.module.scss";
import CardSummary from "./components/cardSummary/CardSummary";
import { useBalanceSummary } from "./useBalanceSummary";

//Daniel: componente para renderização do resumo de Saldo Financeiro
function BalanceSummary(){
    const logic = useBalanceSummary();    

    return(
        <aside className={`${style.balanceSummary} width_100`}>
            {logic.summarys && logic.summarys.map((summary, index)=>{
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