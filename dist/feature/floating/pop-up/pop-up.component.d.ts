import React from "react";
import "./pop-up.style.scss";
interface PopUpProps {
    isModal?: boolean;
    scroll?: boolean;
    theme: 'light-theme' | 'dark-theme';
    children: React.ReactNode;
}
export declare const PopUp: React.FC<PopUpProps>;
export default PopUp;
