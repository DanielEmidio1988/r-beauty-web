import { IDeDataTableProps } from "./deDataTable.types";
import style from "./deDataTable.module.scss";
import { DeInputField } from "@components/deInputField/deInputField";
import { useState } from "react";
import { DeText } from "@components/deText/deText";

export function DeDataTable<T, S extends boolean = false>(props: IDeDataTableProps<T, S>){
    const allKeys = props.row.map((item) => String(item[props.rowIdentifier]))
    const [selectAll, setSelectAll] = useState<boolean>(false);
    return(
        <table className={style.dataTable}>
            <tr>
                {props.selectedItems && (
                    <th>
                        <DeInputField 
                            type="checkbox"
                            value={selectAll}
                            onChange={() => setSelectAll((prev) => !prev)}
                        />
                    </th>
                )}
                {props.columns.map((column) => {
                    return(
                        <th key={String(column.key)}>
                            <DeText
                                size="medium"
                                weight="bold"
                                component="p"
                            >
                                {column.label}
                            </DeText>
                        </th>
                    )
                })}
            </tr>
            <tbody>
                {props.row.map((item) => (
                    <tr>
                        {props.columns.map((column) => (
                            <td key={String(column.key)}>
                                <DeText
                                    size="medium"
                                    weight="default"
                                    component="p"
                                >
                                    {String(item[column.key])}
                                </DeText>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>
    )
}