import React from "react";

export function DeInputFieldController() {

    function onChange(
        onChange: React.Dispatch<React.SetStateAction<string | boolean | Date | number>>,
        type: string,
    ) {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            if (type === "checkbox" || type === "radio") {
                onChange(event.target.checked);
            } else if (type === "number") {
                onChange(Number(event.target.value));
            } else if (type === "date") {
                onChange(new Date(event.target.value));
            } else {
                onChange(event.target.value);
            }
        };

    }

    return { onChange }
}