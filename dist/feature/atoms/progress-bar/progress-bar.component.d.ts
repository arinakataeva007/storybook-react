import React from "react";
import "./progress-bar.style.scss";
interface ProgressBarProps {
    leftRectangleWidth: string;
    theme: "light-theme" | "dark-theme";
}
export declare const ProgressBarComponent: React.FC<ProgressBarProps>;
export default ProgressBarComponent;
