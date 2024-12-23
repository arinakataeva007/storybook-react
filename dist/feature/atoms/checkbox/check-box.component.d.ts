import React from 'react';
import './check-box.style.scss';
interface CheckBoxProps {
    checkboxId: string;
    isIndeterminate?: boolean;
    rlValue: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    theme?: 'light-theme' | 'dark-theme';
}
export declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
