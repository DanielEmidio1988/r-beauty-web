import style from "./CardSummary.module.scss";
import {BsCashCoin} from "react-icons/bs";
import { rBeautyUtils } from "../../../../../../utils/rBeautyUtils";
import { useCardSummaryViewModel } from "./CardSummaryViewModel";
import { CardSummaryProps } from "./CardSummaryTypes";

function CardSummary(props:CardSummaryProps){
    const { context } = useCardSummaryViewModel(props);

    return(
        <div className={style.cardSummary}>
            <h4 className={style.cardSummary___value}>
                {rBeautyUtils().formatCurrencyMoney(props.summary?.value, context.formatMoney.format, context.formatMoney.currency)}
            </h4>
            <p className={style.cardSummary___description}>{props.summary?.description}</p>
            <span 
                className={style.cardSummary___status}
                style={{
                    color: props.summary?.growthSummary < 0 ?
                    "#FA5D7C"
                    :
                    "#6496D1"
                }}
            >
                {props.summary?.growthSummary}% {props.summary?.labelGrowthSummary}
            </span>
            <BsCashCoin color={props.summary?.color} size="40px"/>
        </div>
    )
}

export default CardSummary