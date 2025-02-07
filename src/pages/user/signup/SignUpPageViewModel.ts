import { useSignUpPageModel } from "./SignUpPageModel";

import { SubmitHandler } from "react-hook-form";
import { IUser } from "../../../types/IUser";

export function useSignUpPageViewModel(){
    const {
        context,
        register, 
        handleSubmit,
        errors,
        confirmPassword,
        setConfirmPassword,
        navigate
    } = useSignUpPageModel();

    const onSubmit: SubmitHandler<IUser> = (data) => {
            console.log(data);
        }

    return {
        context,
        register, 
        handleSubmit,
        errors,
        confirmPassword,
        navigate,
        onSubmit
    }
}