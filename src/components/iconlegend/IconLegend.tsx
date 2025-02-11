
import style from "./IconLegend.module.scss";
import { useIconLegendViewModel } from "./IconLegendViewModel";
import { IconLegendProps } from "./IconLegendTypes";
import { BsExclamationCircle } from "react-icons/bs";

function IconLegend(props: IconLegendProps){
    const {} = useIconLegendViewModel(props);
    // Ajustar responsivo. A partir do mobile, a legenda será exibida no clique

    return(
        <span className={style.iconlegend}>
            <BsExclamationCircle color="#6496D1"/>
            <aside className={style.iconlegend__legend}>
                <span className={style.iconlegend__legend__title}>{props.about}</span><br/>
                <span className={style.iconlegend__legend__text}>
                    {props.legend}
                </span>
            </aside>
        </span>
    )
}

export default IconLegend
