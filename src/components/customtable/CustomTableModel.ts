import { hooks } from "@utils/hooks";

export function useCustomTableModel(){
    const [itemsSelected, setItemsSelected] = hooks.useState<string[]>([]);

    return {
        itemsSelected,
        setItemsSelected,
    }
}