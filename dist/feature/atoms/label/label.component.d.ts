import React from 'react';
import './label.style.scss';
interface LabelComponentProps {
    showIcon: boolean;
    showText: boolean;
    label: string;
    iconPadding?: 'left' | 'right';
    isOwner?: boolean;
    disabled?: boolean;
    size?: 'base' | 'mid' | 'large' | 'extra-large';
    theme?: 'light' | 'dark';
    children?: React.ReactNode;
}
export declare const LabelComponent: React.FC<LabelComponentProps>;
export default LabelComponent;
