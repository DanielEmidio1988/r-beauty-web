import { ReactNode } from "react";

export interface IFormatMoney{
    format: string;
    currency: string;
}

export interface IBaseContextProvider{
    formatMoney: IFormatMoney;
    setFormatMoney: React.Dispatch<React.SetStateAction<IFormatMoney>>;
}

export interface IBaseContextProviderProps {
    children: ReactNode;
}