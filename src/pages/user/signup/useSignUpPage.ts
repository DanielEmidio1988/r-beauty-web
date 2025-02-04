import { hooks } from "../../../utils/hooks";
import { useBaseContextData } from "context/BaseContext";
import { SubmitHandler } from "react-hook-form";
import { IUser } from "../../../types/IUser";

export interface SignUpPageProps { };

export function useSignUpPage() {
    const context = useBaseContextData();
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IUser>();
    const [ confirmPassword, setConfirmPassword ] = hooks.useState<string>("");
    const navigate = hooks.useNavigate();

    const onSubmit: SubmitHandler<IUser> = (data) => {
        console.log(data);
    }

    return {context, register, handleSubmit, errors, confirmPassword, setConfirmPassword, navigate, onSubmit}
}