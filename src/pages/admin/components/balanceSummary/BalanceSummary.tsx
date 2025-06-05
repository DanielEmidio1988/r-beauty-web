import style from "./BalanceSummary.module.scss";
import { useBalanceSummaryViewModel } from "./BalanceSummaryViewModel";
import { BalanceSummaryProps } from "./BalanceSummaryTypes";
import { rBeautyUtils } from "../../../../utils/rBeautyUtils";
import { BsCashCoin } from "react-icons/bs";

//Daniel: componente para renderização do resumo de Saldo Financeiro
function BalanceSummary(props: BalanceSummaryProps) {
    const { context } = useBalanceSummaryViewModel(props);

    return (
        <aside className={`${style.balanceSummary} width_100`}>
            {props.summarys && props.summarys.map((summary, index) => {
                return (
                    <div 
                    key={index}
                        className={style.balanceSummary__card}
                    >
                        <h4 className={style.balanceSummary__card__value}>
                            {rBeautyUtils().formatCurrencyMoney(summary?.value, context.formatMoney.format, context.formatMoney.currency)}
                        </h4>
                        <p className={style.balanceSummary__card__description}>{summary?.description}</p>
                        <span
                            className={style.balanceSummary__card__status}
                            style={{
                                color: summary?.growthSummary < 0 ?
                                    "#FA5D7C"
                                    :
                                    "#6496D1"
                            }}
                        >
                            {summary?.growthSummary}% {summary?.labelGrowthSummary}
                        </span>
                        <BsCashCoin color={summary?.color} size="40px" />
                    </div>

                )
            })}
        </aside>
    )
}

export default BalanceSummary;