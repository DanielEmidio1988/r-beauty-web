import { useLoginPageModel } from "./LoginPageModel";
import { goToAdminPage } from "../../../routes/navigate";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "./LoginPageTypes";

export function useLoginPageViewModel() {
    const {
        register,
        handleSubmit,
        errors,
        context,
        navigate,
    } = useLoginPageModel();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    function loginUser() {
        goToAdminPage(navigate);
    }

    return {
        register,
        handleSubmit,
        errors,
        context,
        navigate,
        onSubmit,
        loginUser,
    }
}