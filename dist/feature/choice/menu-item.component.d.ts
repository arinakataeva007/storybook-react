import React from "react";
import "./menu-item.style.scss";
interface MenuItemProps {
    isOwner?: boolean;
    hint?: string;
    popUpScroll?: boolean;
    showCollapseIcon?: boolean;
    isActive?: boolean;
    showHint?: boolean;
    theme: "light-theme" | "dark-theme";
    label: string;
    disabled?: boolean;
    showIcon?: boolean;
    showText?: boolean;
    activeState?: (state: boolean) => void;
    childrenIcon?: React.ReactNode;
    childrenPopUp?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
