import { hooks } from "../../../utils/hooks";
import { useBaseContextData } from "context/BaseContext";
import { IUser } from "../../../types/IUser";

export function useSignUpPageModel() {
    const context = useBaseContextData();
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IUser>();
    const [ confirmPassword, setConfirmPassword ] = hooks.useState<string>("");
    const navigate = hooks.useNavigate();

    return {
        context,
        register, 
        handleSubmit,
        errors,
        confirmPassword,
        setConfirmPassword,
        navigate
    }
}