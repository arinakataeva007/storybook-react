import React from 'react';
import './rich-text.style.scss';
interface RichTextFieldProps {
    placeholder?: string;
    hint?: string;
    showHint?: boolean;
    theme?: string;
    onInputChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
}
export declare const RichTextField: React.FC<RichTextFieldProps>;
export default RichTextField;
