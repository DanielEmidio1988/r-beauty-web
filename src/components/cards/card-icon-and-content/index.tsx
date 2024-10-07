import React from "react";
import style from "./CardIconAndContent.module.scss"

interface Props{
    icon: JSX.Element;
    title: string;
    content: string;
}

function CardIconAndContent({icon, title, content}: Props){
    return(
        <div className={style.card_service}>
            <div className={style.card_service___icon}>
                {icon}
            </div>
            <div className={style.card_service___content}>
                <p><strong>{title}</strong></p>
                <span className={`detail_content`}>{content}</span>
            </div>
        </div>
    )
}

export default CardIconAndContent;