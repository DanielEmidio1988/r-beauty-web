import { IBrand } from "./IBrand";

export interface IProduct{
    id: string;
    id_user: string;
    name: string;
    brand: string;
    profit: number;
    cost: number;
    suggested_sale: number;
    sale_value: number;
    promotional_value: number;
    active_promotion: boolean;
    promotion_expiration_date: string;
    stock: number;
    product_unavailable: boolean;
}

// {
//     "id": "1",
//     "id_user": "1",
//     "name": "Refil Nativa Span Morango Ruby",
//     "brand": "Boticário",
//     "profit": 15,
//     "cost": 30.36,
//     "suggested_sale": 35.72,
//     "sale_value": 43.90,
//     "promotional_value": 37.50,
//     "active_promotion": true,
//     "promotion_expiration_date": "26/12/2024 23:59:59",
//     "stock": 4,
//     "product_unavailable": false
// },