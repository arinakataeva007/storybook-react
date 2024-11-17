import React, { Component } from 'react';
import './scroll.style.scss';
interface ScrollComponentProps {
    rotation?: 'horizontal' | 'vertical';
    theme: string;
}
declare class ScrollComponent extends Component<ScrollComponentProps> {
    private scrollEl;
    constructor(props: ScrollComponentProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ScrollComponentProps): void;
    updateScrollClass(): void;
    render(): React.JSX.Element;
}
export default ScrollComponent;
