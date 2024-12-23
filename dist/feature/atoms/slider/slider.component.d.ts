import React from 'react';
import './slider.style.scss';
interface SliderComponentProps {
    theme: string;
    disabled: boolean;
    onSendProgress?: (value: string) => void;
}
export declare const SliderComponent: React.FC<SliderComponentProps>;
export default SliderComponent;
