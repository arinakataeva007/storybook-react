import React, { MouseEventHandler } from "react";
import "./button.style.scss";
interface ButtonComponentProps {
    label: string;
    state?: "primary" | "secondary";
    theme: "light-theme" | "dark-theme";
    disabled?: boolean;
    showIcon?: boolean;
    showText?: boolean;
    nameIcon?: string;
    onAction?: MouseEventHandler<HTMLButtonElement>;
}
export declare const ButtonComponent: React.FC<ButtonComponentProps>;
export default ButtonComponent;
