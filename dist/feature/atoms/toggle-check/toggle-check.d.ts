import React, { MouseEventHandler } from 'react';
import './toggle-check.style.scss';
interface ToggleCheckProps {
    toggleId: string;
    value: boolean;
    onChange?: MouseEventHandler<HTMLInputElement>;
    onBlur: () => void;
    disabled?: boolean;
    theme: string;
}
export declare const ToggleCheckComponent: React.FC<ToggleCheckProps>;
export default ToggleCheckComponent;
