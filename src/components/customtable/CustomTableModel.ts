import { useState } from "react";
import { ICustomTableProps, IRows } from "./CustomTableTypes";

export function useCustomTableModel(props: ICustomTableProps){
    const [itemsSelected, setItemsSelected] = useState<string[]>([]);
    const [localRows, setLocalRows] = useState<IRows[]>(props.rows)

    return {
        itemsSelected,
        setItemsSelected,
        localRows,
        setLocalRows,
    }
}