import { FormRegister } from "./components/formregisterprod/FormRegister";
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
        <>
            <div className={`infopage`}>
                <div className={`titlearea`}>
                    <h6 className={`title`}>{titlePage}</h6>
                    <span style={{ cursor: "pointer" }} onClick={() => goToProductsPage(navigate)}>Voltar</span>
                </div>
            </div>
            <div className={`formarea width_100`}>
                <div className={`sections-data-register`}>
                    <button
                        className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.registerdata && 'active'}`}
                        onClick={() => switchSection({ type: SECTION_REGISTER.registerdata })}
                    >
                        Cadastro
                    </button>
                    <button
                        className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.history && 'active'} `}
                        onClick={() => switchSection({ type: SECTION_REGISTER.history })}
                    >
                        Histórico
                    </button>
                    <button
                        className={`btn-data-register ${sectionRegister.type === SECTION_REGISTER.details && 'active'}`}
                        onClick={() => switchSection({ type: SECTION_REGISTER.details })}
                    >
                        Detalhes
                    </button>
                </div>
                {sectionRegister.type === SECTION_REGISTER.registerdata && <FormRegister updateRegister={updateRegister} />}
                {sectionRegister.type === SECTION_REGISTER.history && <HistoryTab />}
                {sectionRegister.type === SECTION_REGISTER.details && <DetailsTab />}
            </div>
        </>
    )
}

export default RegisterProductPage;


