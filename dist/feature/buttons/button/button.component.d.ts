import React, { Component, ReactNode } from 'react';
import './button.style.scss';
interface ButtonComponentProps {
    state: string;
    theme: string;
    size: string;
    label: string;
    showIcon: boolean;
    showText: boolean;
    onSendAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: ReactNode;
}
declare class ButtonComponent extends Component<ButtonComponentProps> {
    static defaultProps: {
        state: string;
        showIcon: boolean;
        showText: boolean;
        disabled: boolean;
    };
    private buttonRef;
    constructor(props: ButtonComponentProps);
    classes(): string;
    sendActions(event: React.MouseEvent<HTMLButtonElement>): void;
    renderChildrenWithSlot(slotName: string): (React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[] | null | undefined;
    render(): React.JSX.Element;
}
export default ButtonComponent;
