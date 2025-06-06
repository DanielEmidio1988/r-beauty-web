import React from "react";

export interface IDeInputFieldProps{
    type: "checkbox" | "number" | "date" | "password" | "text" | "radio";
    size?: "small" | "medium" | "large";
    value: string | boolean | Date | number;
    placeholder?: string;
    onChange: React.Dispatch<React.SetStateAction<string | boolean | Date | number>>;
}