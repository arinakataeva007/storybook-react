import React from "react";
import "./text-field.style.scss";
interface TextFieldProps {
    type?: string;
    placeholder: string;
    showHint?: boolean;
    hint?: string;
    autofocus?: boolean;
    value: string;
    disabled?: boolean;
    theme: "light-theme" | "dark-theme";
    onChange: (value: string) => void;
    onInput: (value: string) => void;
    isValid?: boolean;
}
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
