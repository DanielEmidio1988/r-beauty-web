import { ReactNode } from "react";

export interface IDeTextProps{
    children: ReactNode;
    size: "extrasmall" | "small" | "medium" | "large" | "extralarge";
    weight: "bold" | "semibold" | "default";
    component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}