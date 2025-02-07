import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../../utils/hooks";
import { IFormInput } from "./LoginPageTypes";

export function useLoginPageModel() {
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IFormInput>();
    const context = useBaseContextData();
    const navigate = hooks.useNavigate();
    
    return { 
        register,
        handleSubmit,
        errors,
        context,
        navigate,
    }
}