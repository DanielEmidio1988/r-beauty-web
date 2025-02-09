import { useBaseContextData } from "context/BaseContext";
import { hooks } from "../../utils/hooks";

export interface LegendInputProps{
    legend: {name: string; legend: string} | undefined;
};

export function useLegendInput(){
    const context = useBaseContextData();
    const [isHovered, setIsHovered] = hooks.useState<Boolean>(false);

    return { context, isHovered, setIsHovered }
}