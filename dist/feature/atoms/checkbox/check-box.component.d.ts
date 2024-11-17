import React from 'react';
import './check-box.style.scss';
interface CheckBoxProps {
    checkboxId: string;
    isIndeterminate?: boolean;
    rlValue: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    onTouched?: () => void;
    theme?: string;
    sendState?: (value: boolean) => void;
}
declare const CheckBox: React.FC<CheckBoxProps>;
export default CheckBox;
