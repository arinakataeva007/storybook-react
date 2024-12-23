import React from "react";
import './collapse-icon.style.scss';
interface CollapseIconProps {
    isFill?: boolean;
    rotate: "up" | "down" | "right" | "left";
    fill?: string;
    size: "base" | "mid" | "large" | "extra-large";
    disabled?: boolean;
    theme: string;
}
declare const CollapseIcon: React.FC<CollapseIconProps>;
export default CollapseIcon;
