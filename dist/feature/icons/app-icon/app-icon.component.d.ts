import React from 'react';
import './app-icon.style.scss';
interface AppIconProps {
    state: 'driver' | 'disabled';
    type: 'server' | 'app';
    size: 'small' | 'medium' | 'large';
    theme: 'light-theme' | 'dark-theme';
}
declare const AppIconComponent: React.FC<AppIconProps>;
export default AppIconComponent;
