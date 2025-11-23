import { IHeadersAndColumns } from "contexts/tablecontextprovider/TableContextProviderTypes";

export interface ICustomTableProps{
    ariaLabel: string;
    actionLabel?: string;
    headers: IHeadersAndColumns;
    loading: boolean;
    rows: IRows[];
    checkbox: boolean;
}


export interface IHeadersCell {
    /**
     * Interface responsável pela estrutura de tabela
     */
    rowId: string;
    label: string;
    description: string;
    type: string;
}


export interface IRows {
    id: string;
    [key: string]: string | number | boolean; 
}

export type Order = "asc" | "desc";