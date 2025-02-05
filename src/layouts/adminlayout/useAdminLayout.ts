
import { useBaseContextData } from "context/BaseContext";
import { hooks } from "@utils/hooks";

export interface AdminLayoutProps{};

export function useAdminLayout(){
    const context = useBaseContextData();

    return {context};
}
