export interface ILegend{
    name: string;
    legend: string;
}


export interface IProductFields {
    name: string;
    label: string;
    legend: string;
    type: string;
    options?: []
}

export interface IProductsData {
    id: string;
    idUser: string;
    name: string;
    brand: string;
    profit: number;
    cost: number;
    suggestedSale: number;
    saleValue: number;
    promotionalValue: number;
    activePromotion: boolean;
    promotionName: string;
    promotionExpirationDate: string;
    stock: number;
    productUnavailable: boolean;
}
