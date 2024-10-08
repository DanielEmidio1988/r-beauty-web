import { IHistoryData } from "./IHistoryData";

export interface IProduct{
    id?: string;
    id_user: string;
    name: string;
    brand: string;
    profit: number;
    cost: number;
    suggested_sale: number;
    sale_value: number;
    promotional_value: number;
    active_promotion: boolean;
    promotion_name: string;
    promotion_expiration_date: string;
    stock: number;
    product_unavailable: boolean;
    history: IHistoryData[] | [];
}