import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../../types/IProduct";
import MenuAdmin from "../../../../../components/menu-admin";
import HeaderAdmin from "../../../../../components/header/header-admin";
import RegisterProdAdmin from "../../../../../components/register-area/form-register-prod";
import HistoryTab from "../../../../../components/register-area/history-tab";
import { useContextData } from "../../../../../context";
import DetailsTab from "../../../../../components/register-area/details-tab";

enum SECTION_REGISTER{
    registerdata = "Cadastro",
    history = "Histórico",
    details = "Detalhes"
};

interface ISectionRegister{
    type: SECTION_REGISTER,
};

const onSubmit: SubmitHandler<IProduct> = (data) =>{
    console.log(data)
}

function RegisterProductPage() {
    const titlePage: string = "Cadastro de Produto";   
    const { register, handleSubmit, formState: { errors } } = useForm<IProduct>(); 
    const [sectionRegister, setSectionRegister] = useState<ISectionRegister>({type: SECTION_REGISTER.registerdata});
    const updateRegister: boolean = false; //provisório
    const {activeModal, setActiveModal} = useContextData();

    //Daniel: função para alternar entre 'seções' na área de formulário
    function switchSection(section: ISectionRegister){
        setSectionRegister(section);
    }

    return (
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin />
                <div className={`dataarea`}>
                    <HeaderAdmin />
                    <div className={`infopage`}>
                        <div className={`titlearea`}>
                            <h6 className={`title`}>{titlePage}</h6>
                            <span>Voltar</span>
                        </div>
                    </div>
                    <div className={`formarea width_100`}>
                        <div className={`sections-data-register`}>
                            <button 
                                className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.registerdata && 'active'}`}
                                onClick={()=>switchSection({type: SECTION_REGISTER.registerdata})}
                            >
                                Cadastro
                            </button>
                            <button 
                                className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.history && 'active'} `}
                                onClick={()=>switchSection({type: SECTION_REGISTER.history})}
                            >
                                Histórico
                            </button>
                            <button 
                                className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.details && 'active'}`}
                                onClick={()=>switchSection({type: SECTION_REGISTER.details})}
                            >
                                Detalhes
                            </button>
                        </div>
                        {sectionRegister.type === SECTION_REGISTER.registerdata && <RegisterProdAdmin updateRegister={updateRegister}/>}
                        {sectionRegister.type === SECTION_REGISTER.history && <HistoryTab/>}  
                        {sectionRegister.type === SECTION_REGISTER.details && <DetailsTab/>}             
                    </div>
                </div>
            </section>

        </main>
    )
}

export default RegisterProductPage;


