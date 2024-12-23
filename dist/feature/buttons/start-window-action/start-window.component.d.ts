import React from 'react';
import './start-window.style.scss';
interface StartWindowActionComponentProps {
    label: string;
    theme: 'light-theme' | 'dark-theme';
    disabled?: boolean;
    onStateChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export declare const StartWindowActionComponent: React.FC<StartWindowActionComponentProps>;
export default StartWindowActionComponent;
