import React, { useState, useEffect } from "react";
import MenuAdmin from "../../../../../components/menu-admin";
import HeaderAdmin from "../../../../../components/header/header-admin";
import RegisterProdAdmin from "../../../../../components/register-area/form-register-prod";

enum SECTION_REGISTER{
    registerdata = "Cadastro",
    history = "Histórico",
    details = "Detalhes"
};

interface ISectionRegister{
    type: SECTION_REGISTER,
};

function RegisterProductPage() {
    const titlePage: string = "Cadastro de Produto";    
    const [sectionRegister, setSectionRegister] = useState<ISectionRegister>({type: SECTION_REGISTER.registerdata});
    const updateRegister: boolean = false;

    //Daniel: função para alternar entre 'seções' na área de formulário
    function switchSection(section: ISectionRegister){

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
                        </div>
                    </div>
                    <div className={`formarea width_100`}>
                        <div className={`sections-data-register`}>
                            <button className={`btn-data-register active`}>Cadastro</button>
                            <button className={`btn-data-register`}>Histórico</button>
                            <button className={`btn-data-register`}>Detalhes</button>
                        </div>
                        {sectionRegister.type === SECTION_REGISTER.registerdata && <RegisterProdAdmin updateRegister={updateRegister}/>}
                        
                    </div>
                </div>
            </section>

        </main>
    )
}

export default RegisterProductPage;


