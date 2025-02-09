export interface ILegend{
    name: string;
    legend: string;
}

export interface IOption{
    name: string;
    label: string; 
}

export interface IProductFields {
    name: string;
    label: string;
    legend: string;
    type: string;
    options?: []
}