import { useForm } from "react-hook-form";
import { IProduct } from "../../../../../../../types/IProduct";
import { ILegend } from "./FormRegisterTypes";

export function useFormRegisterModel(){
    const { register, handleSubmit, formState: { errors } } = useForm<IProduct>();
    const legends: ILegend ={
        cost: "Valor do produto no momento que ele foi adquirido na ultima compra",
        suggested_sale: "Valor de venda sugerido com base na margem de lucro da marca",
        sale_value: "Valor padrão de venda do produto",
        promotion_name: "Nome da campanha que está atribuido o periodo promocional",
        promotional_value: "Valor que será aplicado na venda no momento da venda, caso a promoção esteja ativa"
    }
    return{
        legends,
        register,
        handleSubmit,
        errors,
    }
}