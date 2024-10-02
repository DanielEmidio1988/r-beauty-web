import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../types/IProduct";
import LegendInput from "../../legend-input";

interface Props{
    updateRegister: boolean
}

interface ILegend {
    name: string;
    legend: string;
};



function RegisterProdAdmin({updateRegister}: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<IProduct>();
    const legendItens: ILegend[] = [
        {
            name: "cost",
            legend: "Valor do produto no momento que ele foi adquirido na ultima compra"
        },
        {
            name: "suggested_sale",
            legend: "Valor de venda sugerido com base na margem de lucro da marca"
        },
        {
            name: "sale_value",
            legend: "Valor padrão de venda do produto"
        },
        {
            name: "promotion_name",
            legend: "Nome da campanha que está atribuido o periodo promocional"
        },
        {
            name: "promotional_value",
            legend: "Valor que será aplicado na venda no momento da venda, caso a promoção esteja ativa"
        }
    ];

    function postRegister(){

    }

    function putRegister(){
        
    }

    const onSubmit: SubmitHandler<IProduct> = (data) =>{
        console.log(data)
    }

    // export interface IProduct{
    //     id: string;
    //     id_user: string;
    //     name: string;
    //     brand: string;
    //     profit: number;
    //     cost: number;
    //     suggested_sale: number;
    //     sale_value: number;
    //     promotional_value: number;
    //     active_promotion: boolean;
    //     promotion_name: string;
    //     promotion_expiration_date: string;
    //     stock: number;
    //     product_unavailable: boolean;
    // }

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
                        <LegendInput
                            legend={legendItens.find(legend => legend.name === "cost")}
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
                        <LegendInput
                            legend={legendItens.find(legend => legend.name === "suggested_sale")}
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
                        <LegendInput
                            legend={legendItens.find(legend => legend.name === "sale_value")}
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
                        <LegendInput
                            legend={legendItens.find(legend => legend.name === "promotion_name")}
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
                        <LegendInput
                            legend={legendItens.find(legend => legend.name === "promotional_value")}
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
                    updateRegister ?
                    <input type="submit" className={``} value={`Atualizar cadastro`}/>
                    :
                    <input type="submit" className={``} value={`Cadastrar`}/>
                }
                { !updateRegister && <input type="submit" value={`Cadastrar e criar novo`}/> }
                <button className={`btnReverse-primary`} type="button">Cancelar</button>
            </div>
        </form>
    )
}

export default RegisterProdAdmin;