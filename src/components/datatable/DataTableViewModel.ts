
import { useDataTableModel } from "./DataTableModel";
import { DataTableProps } from "./DataTableTypes";
import { hooks } from "../../utils/hooks";

export function useDataTableViewModel<T, S extends boolean = false>(props: DataTableProps<T, S>){
    const {} =  useDataTableModel();
    // your code here
    return{}
}
    