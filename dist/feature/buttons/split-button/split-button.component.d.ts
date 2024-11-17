import React, { Component, ReactNode } from 'react';
import './split-button.style.scss';
interface SplitButtonSegmentProps {
    size?: string;
    theme: string;
    onSendState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: ReactNode;
}
declare class SplitButtonSegment extends Component<SplitButtonSegmentProps> {
    static defaultProps: {
        size: string;
        disabled: boolean;
    };
    constructor(props: SplitButtonSegmentProps);
    classes(): string;
    handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
    render(): React.JSX.Element;
}
export default SplitButtonSegment;
