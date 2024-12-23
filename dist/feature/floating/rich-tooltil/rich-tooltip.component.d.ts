import React, { MouseEventHandler } from "react";
import { ThemeProps } from "../../../shared/defaultProps";
import './rich-tooltip.style.scss';
export interface RichTooltipProps extends ThemeProps {
    textRich: string;
    tailPlacement: "R" | "D" | "U" | "L";
    onHandleCloseClick: MouseEventHandler;
}
export declare const RichTooltip: React.FC<RichTooltipProps>;
export default RichTooltip;
