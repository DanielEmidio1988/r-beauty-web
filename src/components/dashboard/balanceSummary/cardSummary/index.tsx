import style from "./CardSummary.module.scss"
import {BsCashCoin} from "react-icons/bs"

interface Props{
    summary: {value: number, description: string, color: string} | undefined
}

function CardSummary({summary}:Props){
    return(
        <div className={style.cardSummary}>
            <h4 className={style.cardSummary___value}>
                {summary?.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </h4>
            <p className={style.cardSummary___description}>{summary?.description}</p>
            <BsCashCoin color={summary?.color} size="40px"/>
        </div>
    )
}

export default CardSummary