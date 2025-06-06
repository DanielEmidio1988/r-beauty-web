export interface IDeDataTableProps<T, S extends boolean = false>{
    columns: { key: keyof T; label: string }[];
    row: T[];
    rowClick: boolean;
    actionRow: () => void;
    selectedItems: S;
    selectedKey: S extends true ? string : never;
    setSelectedKey: S extends true ? (value: string) => void : () => void;
    rowIdentifier: keyof T;
}