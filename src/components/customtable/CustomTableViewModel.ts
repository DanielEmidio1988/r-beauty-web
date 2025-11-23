import { useCustomTableModel } from "./CustomTableModel";
import { ICustomTableProps } from "./CustomTableTypes";

export function useCustomTableViewModel(){
    const {itemsSelected, setItemsSelected, localRows, setLocalRows} = useCustomTableModel();

    function handleSelectedItem(item: string){
        setItemsSelected((prev) => {
            if(prev.includes(item)){
                return prev.filter((i) => i!== item);
            }
            return [...prev, item]
        })
    }
    
    return {
        handleSelectedItem,
        itemsSelected,
        localRows,
        setLocalRows,
    }
}