import MenuAdmin from "../../../../../layouts/adminlayout/components/menuadmin/MenuAdmin";
import HeaderAdmin from "../../../../../layouts/adminlayout/components/headeradmin/HeaderAdmin";
import RegisterProdAdmin from "../../../../../components/register-area/form-register-prod";
import HistoryTab from "../../../../../components/register-area/history-tab";
import DetailsTab from "../../../../../components/register-area/details-tab";
import { goToProductsPage } from "../../../../../routes/navigate";
import { SECTION_REGISTER } from "./RegisterProductPageTypes";
import { useRegisterProductPageViewModel } from "./RegisterProductPageViewModel";

function RegisterProductPage() {
    const {
        register, 
        handleSubmit, 
        errors, 
        sectionRegister, 
        setSectionRegister,
        activeModal, 
        setActiveModal,
        context,
        navigate,
        titlePage,
        updateRegister,
        switchSection,
        onSubmit,
    } = useRegisterProductPageViewModel();

    return (
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin />
                <div className={`dataarea`}>
                    <HeaderAdmin />
                    <div className={`infopage`}>
                        <div className={`titlearea`}>
                            <h6 className={`title`}>{titlePage}</h6>
                            <span style={{cursor: "pointer"}} onClick={()=>goToProductsPage(navigate)}>Voltar</span>
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


