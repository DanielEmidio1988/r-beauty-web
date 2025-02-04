import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../../../utils/hooks";
import { SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../../../types/IProduct";

export interface RegisterProductPageProps{};

export enum SECTION_REGISTER{
    registerdata = "Cadastro",
    history = "Histórico",
    details = "Detalhes"
};

interface ISectionRegister{
    type: SECTION_REGISTER,
};



export function useRegisterProductPage(){
    const context = useBaseContextData();
    const navigate = hooks.useNavigate();
    const titlePage: string = "Cadastro de Produto";   
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IProduct>(); 
    const [ sectionRegister, setSectionRegister ] = hooks.useState<ISectionRegister>({type: SECTION_REGISTER.registerdata});
    const updateRegister: boolean = false; //provisório
    const {activeModal, setActiveModal} = useBaseContextData();
    
        //Daniel: função para alternar entre 'seções' na área de formulário
    function switchSection(section: ISectionRegister){
        setSectionRegister(section);
    }

    const onSubmit: SubmitHandler<IProduct> = (data) =>{
        console.log(data)
    }

    return{context, navigate, titlePage, register, handleSubmit, sectionRegister, setSectionRegister, updateRegister, activeModal, setActiveModal, switchSection, onSubmit}
}