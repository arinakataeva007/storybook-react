import React from 'react';
import './label.style.scss';
interface LabelComponentProps {
    showIcon: boolean;
    showText: boolean;
    label: string;
    iconPadding?: 'left' | 'right';
    isOwner?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    theme?: 'light' | 'dark';
}
declare const LabelComponent: React.FC<LabelComponentProps>;
export default LabelComponent;
