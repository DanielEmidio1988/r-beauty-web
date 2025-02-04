import { hooks } from "../../../utils/hooks";
import { useBaseContextData } from "context/BaseContext";
import { goToAdminPage } from "../../../routes/navigate";
import { SubmitHandler } from "react-hook-form";

export interface LoginPageProps { };

interface IFormInput {
    email: string;
    password: string;
}

export function useLoginPage() {
    const context = useBaseContextData();
    const navigate = hooks.useNavigate();
    const { register, handleSubmit, formState: { errors } } = hooks.useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    function loginUser() {
        goToAdminPage(navigate);
    }

    return { context, navigate, register, handleSubmit, errors, onSubmit, loginUser }
}