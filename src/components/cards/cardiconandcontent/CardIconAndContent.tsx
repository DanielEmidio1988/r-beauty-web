import React from "react";
import style from "./CardIconAndContent.module.scss"
import { useCardIconAndContent, CardIconAndContentProps } from "./useCardIconAndContent";

function CardIconAndContent(props: CardIconAndContentProps){
    const logic = useCardIconAndContent();

    return(
        <div className={style.card_service}>
            <div className={style.card_service___icon}>
                {props.icon}
            </div>
            <div className={style.card_service___content}>
                <p><strong>{props.title}</strong></p>
                <span className={`detail_content`}>{props.content}</span>
            </div>
        </div>
    )
}

export default CardIconAndContent;