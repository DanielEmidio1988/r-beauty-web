import React from "react";
import style from "./LowInventory.module.scss";

//Daniel: componente para renderização de itens de inventário com estoque baixo
function LowInventory(){

    function updateInventory(){
        //função para atualizar inventário
    }

    return(
        <aside className={style.lowInventory}>
            <p className={style.lowInventory___title}>Relação de Estoque Baixo</p>
            <table className={style.lowInventory___table} cellPadding={0} cellSpacing={0}>
                <tr className={style.lowInventory___table___tr}>
                    <td className={style.lowInventory___table___dataProduct}>
                        <span className={style.lowInventory___table___dataProduct___product}>Refil Nativa Span Morango Ruby</span><br/>
                        <span className={style.lowInventory___table___dataProduct___brand}>Boticário</span>
                    </td>
                    <td className={style.lowInventory___table___qtdProduct}>
                        <span className={`${style.lowInventory___table___qtdProduct___data}`}>5</span>
                    </td>
                </tr>
                <tr className={style.lowInventory___table___tr}>
                    <td className={style.lowInventory___table___dataProduct}>
                        <span className={style.lowInventory___table___dataProduct___product}>Refil Nativa Spa Ameixa Negra</span><br/>
                        <span className={style.lowInventory___table___dataProduct___brand}>Boticário</span>
                    </td>
                    <td className={style.lowInventory___table___qtdProduct}>
                        <span className={`${style.lowInventory___table___qtdProduct___data}`}>4</span>
                    </td>
                </tr>
                <tr className={style.lowInventory___table___tr}>
                    <td className={style.lowInventory___table___dataProduct}>
                        <span className={style.lowInventory___table___dataProduct___product}>Refil Hidratante Chá de Camomila e Lavanda</span><br/>
                        <span className={style.lowInventory___table___dataProduct___brand}>Natura</span>
                    </td>
                    <td className={style.lowInventory___table___qtdProduct}>
                        <span className={`${style.lowInventory___table___qtdProduct___data}`}>4</span>
                    </td>
                </tr>
                <tr className={style.lowInventory___table___tr}>
                    <td className={style.lowInventory___table___dataProduct}>
                        <span className={style.lowInventory___table___dataProduct___product}>Body Splash Nectarina e Flor de Pessego</span><br/>
                        <span className={style.lowInventory___table___dataProduct___brand}>Avon</span>
                    </td>
                    <td className={style.lowInventory___table___qtdProduct}>
                        <span className={`${style.lowInventory___table___qtdProduct___data__alert}`}>0</span>
                    </td>
                </tr>
            </table>
        </aside>
    )
}

export default LowInventory;