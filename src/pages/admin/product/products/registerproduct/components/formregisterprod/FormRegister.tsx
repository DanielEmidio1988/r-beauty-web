import IconLegend from "../../../../../../../components/iconlegend/IconLegend";
import { useFormRegisterModelViewModel } from "./FormRegisterViewModel";
import { FormRegisterProps } from "./FormRegisterTypes";

export function FormRegister(props: FormRegisterProps) {
    const {
        legends,
        register,
        handleSubmit,
        errors,
        onSubmit,
    } = useFormRegisterModelViewModel();

    return (
        <form className={`form`} onSubmit={handleSubmit(onSubmit)}>
            <div className={`single-column`}>
                <div className={`input-area`}>
                    <label htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register("name", {required: "Favor, informar o Nome do produto"})} 
                    />
                </div>
            </div>
            <div className={`double-column`}>
                <div className={`input-area`}>
                    <label htmlFor="brand">Marca</label>
                    <input 
                        type="text" 
                        id="brand"
                        {...register("brand", {required: "Favor, informar a Marca do produto "})}
                    />
                </div>
                <div className={`input-area`}>
                    <label htmlFor="profit">Percentual Lucro</label>
                    <input 
                        type="number" 
                        id="profit"
                        {...register("profit")}
                        readOnly
                        className={`input-value-percentage`}
                    />
                </div>
            </div>
            <div className={`triple-column`}>
                <div className={`input-area`}>
                    <label htmlFor="cost">
                        Preço de Custo 
                        <IconLegend
                            legend={legends.cost}
                            about="Entenda melhor"
                        />
                    </label>
                    <input 
                        type="number" 
                        id="cost"
                        {...register("cost", {required: "Favor, informar o Preço de Custo do produto"})}
                        className={`input-value-money`}
                    />
                </div>
                <div className={`input-area`}>
                    <label htmlFor="suggested_sale">
                        Preço Sugerido
                        <IconLegend
                            legend={legends.suggested_sale}
                            about="Entenda melhor"
                        />
                    </label> 
                    <input 
                        type="text" 
                        id="suggested_sale"
                        {...register("suggested_sale")}
                        readOnly 
                        className={`input-value-money`}
                    />
                </div>
                <div className={`input-area`}>
                    <label htmlFor="sale_value">
                        Preço de Venda
                        <IconLegend
                            legend={legends.sale_value}
                            about="Entenda melhor"
                        />
                    </label>
                    <input 
                        type="text" 
                        id="sale_value"
                        {...register("sale_value")}
                        className={`input-value-money`}
                    />
                </div>
            </div>
            <div className={`triple-column`}>
                <div className={`input-area`}>
                    <label htmlFor="active_promotion">
                        Promoção Ativa
                        <IconLegend
                            legend={legends.promotion_name}
                            about="Entenda melhor"
                        />
                    </label>
                    <div className={`checked-area`}>
                        <input 
                            type="checkbox" 
                            id="active_promotion"
                            {...register("active_promotion")}
                        />
                        <input 
                            type="text" 
                            id="promotion_name"
                            {...register("promotion_name")}
                            readOnly 
                        />
                    </div>
                </div>
                <div className={`input-area`}>
                    <label htmlFor="promotional_value">
                        Preço Promocional
                        <IconLegend
                            legend={legends.promotional_value}
                            about="Entenda melhor"
                        />
                    </label>
                    <input
                        id="promotional_value" 
                        type="number" 
                        {...register("promotional_value")}
                        className={`input-value-money`}
                    />
                </div>
                <div className={`input-area`}>
                    <label htmlFor="promotion_expiration_date">Data Expiração Promoção</label>
                    <input 
                        type="date" 
                        id="promotion_expiration_date"
                        {...register("promotion_expiration_date")}
                    />
                </div>
            </div>
            <div className={`triple-column`}>
                <div className={`input-area`}>
                    <label htmlFor="product_unavailable">Produto Ativo</label>
                    <select
                        id="product_unavailable"
                        {...register("product_unavailable")}
                    >
                        <option value="false">Habilitar Produto</option>
                        <option value="true">Desabilitar Produto</option>
                    </select>
                </div>
                <div className={`input-area`}>
                    <label id="stock">Quantidade Estoque</label>
                    <input 
                        type="number"
                        id="stock"
                        {...register("stock")} 
                    />
                </div>
                <div className={`input-area`}>

                </div>
            </div>
            <div className={`single-column`}>
                {
                    props.updateRegister ?
                    <input type="submit" className={``} value={`Atualizar cadastro`}/>
                    :
                    <input type="submit" className={``} value={`Cadastrar`}/>
                }
                { !props.updateRegister && <input type="submit" value={`Cadastrar e criar novo`}/> }
                <button className={`btnReverse-primary`} type="button">Cancelar</button>
            </div>
        </form>
    )
}