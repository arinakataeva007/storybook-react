import React, { Component } from "react";
import "./progress-bar.style.scss";
interface ProgressBarProps {
    leftRectangleWidth: string;
    theme: "light" | "dark";
}
export declare class ProgressBarComponent extends Component<ProgressBarProps> {
    private leftRectangleRef;
    constructor(props: ProgressBarProps);
    componentDidUpdate(prevProps: ProgressBarProps): void;
    render(): React.JSX.Element;
}
export default ProgressBarComponent;
