import React, { Component } from 'react';
import './base-button.style.scss';
interface BaseButtonProps {
    isOwner?: boolean;
    name: string;
    theme: string;
    size: string;
    disabled?: boolean;
}
declare class BaseButton extends Component<BaseButtonProps> {
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
