import MenuAdmin from "../../../../../layouts/adminlayout/components/menuadmin/MenuAdmin";
import HeaderAdmin from "../../../../../layouts/adminlayout/components/header-admin/HeaderAdmin";
import RegisterProdAdmin from "../../../../../components/register-area/form-register-prod";
import HistoryTab from "../../../../../components/register-area/history-tab";
import DetailsTab from "../../../../../components/register-area/details-tab";
import { goToProductsPage } from "../../../../../routes/navigate";
import { useRegisterProductPage, SECTION_REGISTER } from "./useRegisterProductPage";


function RegisterProductPage() {
    const logic = useRegisterProductPage();

    return (
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin />
                <div className={`dataarea`}>
                    <HeaderAdmin />
                    <div className={`infopage`}>
                        <div className={`titlearea`}>
                            <h6 className={`title`}>{logic.titlePage}</h6>
                            <span style={{cursor: "pointer"}} onClick={()=>goToProductsPage(logic.navigate)}>Voltar</span>
                        </div>
                    </div>
                    <div className={`formarea width_100`}>
                        <div className={`sections-data-register`}>
                            <button 
                                className={`btn-data-register ${logic.sectionRegister.type === SECTION_REGISTER.registerdata && 'active'}`}
                                onClick={()=>logic.switchSection({type: SECTION_REGISTER.registerdata})}
                            >
                                Cadastro
                            </button>
                            <button 
                                className={`btn-data-register ${logic.sectionRegister.type === SECTION_REGISTER.history && 'active'} `}
                                onClick={()=>logic.switchSection({type: SECTION_REGISTER.history})}
                            >
                                Histórico
                            </button>
                            <button 
                                className={`btn-data-register ${logic.sectionRegister.type === SECTION_REGISTER.details && 'active'}`}
                                onClick={()=>logic.switchSection({type: SECTION_REGISTER.details})}
                            >
                                Detalhes
                            </button>
                        </div>
                        {logic.sectionRegister.type === SECTION_REGISTER.registerdata && <RegisterProdAdmin updateRegister={logic.updateRegister}/>}
                        {logic.sectionRegister.type === SECTION_REGISTER.history && <HistoryTab/>}  
                        {logic.sectionRegister.type === SECTION_REGISTER.details && <DetailsTab/>}             
                    </div>
                </div>
            </section>

        </main>
    )
}

export default RegisterProductPage;


