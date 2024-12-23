import React from "react";
import "./label.style.scss";
interface LabelComponentProps {
    label: string;
    size?: "base" | "mid" | "large" | "extra-large";
    theme?: "light-theme" | "dark-theme";
    iconPadding?: "left" | "right";
    isOwner?: boolean;
    disabled?: boolean;
    showIcon?: boolean;
    showText?: boolean;
    children?: React.ReactNode;
}
export declare const LabelComponent: React.FC<LabelComponentProps>;
export default LabelComponent;
