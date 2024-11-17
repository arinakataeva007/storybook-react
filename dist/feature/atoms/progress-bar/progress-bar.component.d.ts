import React, { Component } from 'react';
import './progress-bar.style.scss';
interface ProgressBarComponentProps {
    leftRectangleWidth: number;
    theme: string;
}
declare class ProgressBarComponent extends Component<ProgressBarComponentProps> {
    private leftRectangleRef;
    constructor(props: ProgressBarComponentProps);
    componentDidUpdate(prevProps: ProgressBarComponentProps): void;
    render(): React.JSX.Element;
}
export default ProgressBarComponent;
