import React from "react";
import { RichTooltipProps } from "../../floating/rich-tooltil/rich-tooltip.component";
import './formated-text-field.style.scss';
interface FormatedTextProps extends RichTooltipProps {
    placeholder?: string;
    rlValue: string;
    onInput: (value: string) => void;
}
export declare const FormatedTextField: React.FC<FormatedTextProps>;
export default FormatedTextField;
