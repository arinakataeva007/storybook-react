import React from 'react';
import './scroll-group.style.scss';
interface ScrollGroupProps {
    orientation?: 'vertical' | 'horizontal';
    theme: 'light-theme' | 'dark-theme';
    children: React.ReactNode;
}
declare const ScrollGroup: React.ForwardRefExoticComponent<ScrollGroupProps & React.RefAttributes<HTMLDivElement>>;
export default ScrollGroup;
