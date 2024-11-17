import React, { Component } from 'react';
interface SliderComponentProps {
    theme: string;
    disabled: boolean;
    onSendProgress: (value: string) => void;
}
declare class SliderComponent extends Component<SliderComponentProps> {
    private scrollbarRef;
    private scrollTrackRef;
    constructor(props: SliderComponentProps);
    componentDidMount(): void;
    updateScrollTrack(): void;
    onInput(): void;
    render(): React.JSX.Element;
}
export default SliderComponent;
