import { useBaseContextProvider } from "contexts/basecontextprovider/BaseContext";
import { hooks } from "../../../utils/hooks";
import { IFormInput } from "./LoginPageTypes";

export function useLoginPageModel() {
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IFormInput>();
    const context = useBaseContextProvider();
    const navigate = hooks.useNavigate();
    
    return { 
        register,
        handleSubmit,
        errors,
        context,
        navigate,
    }
}