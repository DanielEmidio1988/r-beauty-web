
export interface DataTableProps<T, S extends boolean = false>{
    /**
     * The headers to be displayed in the table.
     */
    headerTable: Array<IHeaderTable<T>>;
    /**
     * The data to be displayed in the table, an array of objects of generic type `T`.
     */
    dataTable: T[];
    /**
     * Defines whether a row in the table will have an action when clicked (e.g., row expansion).
     */
    rowClick: boolean;
    /**
     * Defines the action that will occur when a row in the table is clicked.
     * It can be a function or an action type that will be triggered upon row click.
     */
    actionRow: (row: T) => void;
    /**
     * Indicates whether the table will include a checkbox input for selecting multiple rows.
     * If `true`, rows will have checkboxes that can be selected.
     */
    selectedItems: S;
     /**
     * If `selectedItems` is `true`, this field specifies the key in the data object 
     * that will be used to store the selection value (e.g., the `selected` field).
     * This property is required only when `selectedItems` is `true`.
     */
    selectKey: S extends true ? string : never;
}

export interface IHeaderTable <T>{
    label: string;
    variable: keyof T;
}