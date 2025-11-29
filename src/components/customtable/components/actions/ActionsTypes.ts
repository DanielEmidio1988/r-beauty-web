import { IActions } from "contexts/tablecontextprovider/TableContextProviderTypes";

export interface IActionsTypes {
    labelSelect?: string;
    param: string;
    actions: IActions[];
}