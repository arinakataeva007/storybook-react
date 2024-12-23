import React from "react";
import "./dropdown.styles.scss";
interface DropdownProps {
    popUpScroll?: boolean;
    collapsePlacement?: "left" | "right";
    theme?: "light-theme" | "dark-theme";
    label?: string;
    showText?: boolean;
    disabled?: boolean;
    onActiveStateChange?: (isOpen: boolean) => void;
    children?: React.ReactNode;
}
export declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
