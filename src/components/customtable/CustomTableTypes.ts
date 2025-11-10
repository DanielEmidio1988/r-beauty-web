
export interface ICustomTableProps{
    headers: IHeadersAndColumns;
    rows: IRowCell[];
}


export interface IHeadersAndColumns {
    /**
     * Interface responsável pela estrutura de tabela
     */
    headersCell: IHeadCell[];
    label: string;
    order: Order;
    orderBy: string;
    description: string;
    type: string;
    checkbox: boolean;
    collapse: boolean;
}

export interface IHeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

export interface IRowCell {
    /**
     * Interface responsável pela estrutura de linhas de tabela
     */
    id: string;
    label: string; // Texto renderizado na linha da tabela
    columnID: string; // Nome da chave que 
    mask: string;
    value: string | number | boolean | Date;
    onClick?: () => void;
}

export type Order = "asc" | "desc";