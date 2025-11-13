
export interface ICustomTableProps{
    ariaLabel: string;
    headers: IHeadersCell[];
    rows: IRows[];
    checkbox: boolean;
}


export interface IHeadersCell {
    /**
     * Interface responsável pela estrutura de tabela
     */
    rowId: string;
    label: string;
    order: Order;
    orderBy: string;
    description: string;
    type: string;
    collapse: boolean;
}


export interface IRows {
    id: string;
    [key: string]: string | number | boolean; 
}

export type Order = "asc" | "desc";