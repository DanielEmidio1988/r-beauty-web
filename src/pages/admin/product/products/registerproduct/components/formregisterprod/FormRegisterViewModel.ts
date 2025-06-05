import { useFormRegisterModel } from "./FormRegisterModel";
import { IProduct } from "../../../../../../../types/IProduct";
import { SubmitHandler } from "react-hook-form";


export function useFormRegisterModelViewModel() {
    const {
        legends,
        register,
        handleSubmit,
        errors,
    } = useFormRegisterModel();

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        console.log(data);
    }

    return {
        legends,
        onSubmit,
        register,
        handleSubmit,
        errors,
    }
}