import { useCustomTableModel } from "./CustomTableModel";

export function useCustomTableViewModel(){
    const {itemsSelected, setItemsSelected} = useCustomTableModel();

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
    }
}