import React, {useState} from "react";
import style from "./LegendInput.module.scss"

interface Props{
    legend: {name: string; legend: string} | undefined
}

function LegendInput({legend}: Props){
    const [isHovered, setIsHovered] = useState<Boolean>(false)

    return(
        <span
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
            className={style.legendinput}
        >
            ?
            <div className={`${style.legentinput___legendBox} ${isHovered && style.display}`}>
                <span className={style.legentinput___legendBox___legend}>{legend?.legend}</span>
            </div>
        </span>
    )
}

export default LegendInput;