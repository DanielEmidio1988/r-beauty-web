
export interface ICustomTableProps{
    headers: IHeadersAndColumns;
    rows: Record<string, string>[];
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
    mask: string;
    collapse: boolean;
    onClick?: () => void;
}

export interface IHeadCell {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}

export type Order = "asc" | "desc";