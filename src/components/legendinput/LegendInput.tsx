import style from "./LegendInput.module.scss"
import { useLegendInput, LegendInputProps } from "./useLegendInput";


function LegendInput(props: LegendInputProps){
    const logic = useLegendInput();

    return(
        <span
            onMouseEnter={()=> logic.setIsHovered(true)}
            onMouseLeave={()=> logic.setIsHovered(false)}
            className={style.legendinput}
        >
            ?
            <div className={`${style.legentinput___legendBox} ${logic.isHovered && style.display}`}>
                <span className={style.legentinput___legendBox___legend}>{props.legend?.legend}</span>
            </div>
        </span>
    )
}

export default LegendInput;