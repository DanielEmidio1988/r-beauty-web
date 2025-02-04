import style from "./CardSummary.module.scss";
import {BsCashCoin} from "react-icons/bs";
import { rBeautyUtils } from "../../../../../../utils/rBeautyUtils";
import { useCardSummary, CardSummaryProps } from "./useCardSummary";

function CardSummary(props:CardSummaryProps){
    const logic = useCardSummary();

    return(
        <div className={style.cardSummary}>
            <h4 className={style.cardSummary___value}>
                {rBeautyUtils().formatCurrencyMoney(props.summary?.value, logic.context.formatMoney.format, logic.context.formatMoney.currency)}
            </h4>
            <p className={style.cardSummary___description}>{props.summary?.description}</p>
            <BsCashCoin color={props.summary?.color} size="40px"/>
        </div>
    )
}

export default CardSummary