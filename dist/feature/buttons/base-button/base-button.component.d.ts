import React, { MouseEventHandler } from "react";
import "./base-button.style.scss";
import { SizeProps, ThemeProps } from "../../../shared/defaultProps";
export interface BaseButtonProps extends SizeProps, ThemeProps {
    name: string;
    isOwner?: boolean;
    disabled?: boolean;
    onAction?: MouseEventHandler<HTMLButtonElement>;
}
export declare const BaseButton: React.FC<BaseButtonProps>;
export default BaseButton;
