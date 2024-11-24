import React, { Component } from 'react';
import './base-button.style.scss';
import { SizeProps, ThemeProps } from "../../../shared/defaultProps";
export interface BaseButtonProps extends SizeProps, ThemeProps {
    name: string;
    isOwner?: boolean;
}
export declare class BaseButton extends Component<BaseButtonProps> {
    private baseBtnEl;
    constructor(props: BaseButtonProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: BaseButtonProps): void;
    removeFocus(): void;
    getClasses(): string;
    renderIcon(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
export default BaseButton;
