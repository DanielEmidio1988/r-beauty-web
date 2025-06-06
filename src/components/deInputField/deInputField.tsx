import { DeInputFieldController } from "./deInputField.controller";
import { IDeInputFieldProps } from "./deInputField.types";
import styles from "./deInputField.module.scss";

export function DeInputField(props: IDeInputFieldProps) {
    const controller = DeInputFieldController();

    const isCheckbox = props.type === "checkbox" || props.type === "radio";

    return (
        <input
            className={`${styles.deInputField} ${props.type}`}
            type={props.type}
            checked={isCheckbox ? Boolean(props.value) : undefined}
            value={
                !isCheckbox
                    ? props.value instanceof Date
                        ? props.value.toISOString().split("T")[0]
                        : String(props.value)
                    : undefined
            }
            placeholder={props.placeholder}
            onChange={controller.onChange(props.onChange, props.type)}
        />
    )
}