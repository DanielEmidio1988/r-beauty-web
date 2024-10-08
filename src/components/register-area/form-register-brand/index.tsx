import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IBrand } from "../../../types/IBrand";

interface Props{
    updateRegister: boolean
}

function FormRegisterBrand({updateRegister}: Props){
    const { register, handleSubmit, formState: { errors } } = useForm<IBrand>();

    return(
        <form className={`form`}>
            <div className={`single-column`}>
                <div className={`input-area`}>
                    <label htmlFor="name">Nome da Marca</label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register("name", {required: "Favor, informar o Nome da Categoria"})} 
                    />
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
            </div>
        </form>
    )
}

export default FormRegisterBrand