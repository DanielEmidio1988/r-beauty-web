import { IDeTextProps } from "./deText.types";

export function DeText(props: IDeTextProps){
    return(
        <props.component>
            {props.children}
        </props.component>
    )
}