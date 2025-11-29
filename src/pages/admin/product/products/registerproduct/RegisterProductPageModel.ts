import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "../../../../../utils/hooks";
import { IProduct } from "../../../../../types/IProduct";
import { ISectionRegister, SECTION_REGISTER } from "./RegisterProductPageTypes";

export function useRegisterProductPageModel() {
    const {register, handleSubmit, formState: { errors }} = hooks.useForm<IProduct>();
    const [sectionRegister, setSectionRegister] = hooks.useState<ISectionRegister>({ type: SECTION_REGISTER.registerdata }); 
    const [ activeModal, setActiveModal ]  = hooks.useState<boolean>(false);
    const context = useBaseContextProvider();
    const navigate = hooks.useNavigate();
    const titlePage: string = "Cadastro de Produto";
    const updateRegister: boolean = false; //provisório

    return { 
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
        updateRegister
     }
}