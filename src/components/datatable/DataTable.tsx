
import style from "./DataTable.module.scss";
import { useDataTableViewModel } from "./DataTableViewModel";
import { DataTableProps } from "./DataTableTypes";

function DataTable<T, S extends boolean = false>(props: DataTableProps<T, S>) {
    const { } = useDataTableViewModel(props);

    return (
        <div className={style.datatable}>
            <table>
                <tr>
                    {props.headerTable.map((header, index) => {
                        return (
                            <th key={index}>
                                {header.label}
                            </th>
                        )
                    })}
                </tr>
                {props.dataTable.map((data, rowIndex) => {

                    return (
                        <tr key={rowIndex} onClick={() => props.rowClick && props.actionRow}>
                            {props.headerTable.map((header, index) => (
                                <td key={index}>{(data[header.variable as keyof T] as React.ReactNode)}</td>
                            ))}
                            
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default DataTable
