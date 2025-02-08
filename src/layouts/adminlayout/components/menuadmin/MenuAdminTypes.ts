export interface SubMenu{
    label: string;
    url_item: (navigate: any) => void;
}

export interface Menu{
    label: string;
    url_item?: (navigate: any) => void; 
    icon?: JSX.Element;
    submenu?: SubMenu[];
}