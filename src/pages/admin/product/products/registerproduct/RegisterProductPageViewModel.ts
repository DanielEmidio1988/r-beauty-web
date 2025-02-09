import { SubmitHandler } from "react-hook-form";
import { ISectionRegister } from "./RegisterProductPageTypes";
import { useRegisterProductPageModel } from "./RegisterProductPageModel";
import { IProduct } from "../../../../../types/IProduct";

export function useRegisterProductPageViewModel() {
    const { 
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
     } = useRegisterProductPageModel();

    function switchSection(section: ISectionRegister) {
        setSectionRegister(section);
    }

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        console.log(data)
    }

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
        updateRegister,
        switchSection,
        onSubmit,
    }
}