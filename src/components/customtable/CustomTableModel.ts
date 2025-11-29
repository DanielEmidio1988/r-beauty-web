import { useState } from "react";
import { ICustomTableProps, IRows } from "./CustomTableTypes";

export function useCustomTableModel(){
    const [itemsSelected, setItemsSelected] = useState<string[]>([]);
    const [localRows, setLocalRows] = useState<IRows[]>([])

    return {
        itemsSelected,
        setItemsSelected,
        localRows,
        setLocalRows,
    }
}