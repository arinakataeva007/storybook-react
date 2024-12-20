import React from 'react';
import './app-icon.style.scss';
interface AppIconProps {
  state: 'driver' | 'disabled';    
  type: 'server' | 'app';          
  size: 'small' | 'medium' | 'large'; 
  theme: 'light-theme' | 'dark-theme';  
}

const AppIconComponent: React.FC<AppIconProps> = ({ state, type, size, theme }) => {
 
  const classes = [
    `symbol-${state}`,
    `symbol-size--${size}`,
    `symbol-${theme}`,
  ].join(' ');

  
  const renderIcon = () => {
    if (type === 'server') {
      return (
        <svg
          className={classes}
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
        >
          <mask id="mask0_605_19204" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="32">
            <rect x="0.5" width="32" height="32" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_605_19204)">
            <path
              d="M16.5 14.6667C19.8333 14.6667 22.6667 14.1444 25 13.1C27.3333 12.0556 28.5 10.8 28.5 9.33333C28.5 7.86667 27.3333 6.61111 25 5.56667C22.6667 4.52222 19.8333 4 16.5 4C13.1667 4 10.3333 4.52222 8 5.56667C5.66667 6.61111 4.5 7.86667 4.5 9.33333C4.5 10.8 5.66667 12.0556 8 13.1C10.3333 14.1444 13.1667 14.6667 16.5 14.6667ZM16.5 18C17.4111 18 18.55 17.9056 19.9167 17.7167C21.2833 17.5278 22.6 17.2222 23.8667 16.8C25.1333 16.3778 26.2222 15.8278 27.1333 15.15C28.0444 14.4722 28.5 13.6444 28.5 12.6667V16C28.5 16.9778 28.0444 17.8056 27.1333 18.4833C26.2222 19.1611 25.1333 19.7111 23.8667 20.1333C22.6 20.5556 21.2833 20.8611 19.9167 21.05C18.55 21.2389 17.4111 21.3333 16.5 21.3333C15.5889 21.3333 14.45 21.2389 13.0833 21.05C11.7167 20.8611 10.4 20.5556 9.13333 20.1333C7.86667 19.7111 6.77778 19.1611 5.86667 18.4833C4.95556 17.8056 4.5 16.9778 4.5 16V12.6667C4.5 13.6444 4.95556 14.4722 5.86667 15.15C6.77778 15.8278 7.86667 16.3778 9.13333 16.8C10.4 17.2222 11.7167 17.5278 13.0833 17.7167C14.45 17.9056 15.5889 18 16.5 18ZM16.5 24.6667C17.4111 24.6667 18.55 24.5722 19.9167 24.3833C21.2833 24.1944 22.6 23.8889 23.8667 23.4667C25.1333 23.0444 26.2222 22.4944 27.1333 21.8167C28.0444 21.1389 28.5 20.3111 28.5 19.3333V22.6667C28.5 23.6444 28.0444 24.4722 27.1333 25.15C26.2222 25.8278 25.1333 26.3778 23.8667 26.8C22.6 27.2222 21.2833 27.5278 19.9167 27.7167C18.55 27.9056 17.4111 28 16.5 28C15.5889 28 14.45 27.9056 13.0833 27.7167C11.7167 27.5278 10.4 27.2222 9.13333 26.8C7.86667 26.3778 6.77778 25.8278 5.86667 25.15C4.95556 24.4722 4.5 23.6444 4.5 22.6667V19.3333C4.5 20.3111 4.95556 21.1389 5.86667 21.8167C6.77778 22.4944 7.86667 23.0444 9.13333 23.4667C10.4 23.8889 11.7167 24.1944 13.0833 24.3833C14.45 24.5722 15.5889 24.6667 16.5 24.6667Z"
              fill="#1D8828"
            />
          </g>
        </svg>
      );
    }

    return (
      <svg
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <mask id="mask0_605_19149" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <rect width="32" height="32" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_605_19149)">
          <path
            d="M22.2 17.3333L14.6667 9.79994L22.2 2.2666L29.7333 9.79994L22.2 17.3333ZM4 14.6666V3.99994H14.6667V14.6666H4ZM17.3333 27.9999V17.3333H28V27.9999H17.3333ZM4 27.9999V17.3333H14.6667V27.9999H4Z"
            fill="#1D8828"
          />
        </g>
      </svg>
    );
  };

  return <>{renderIcon()}</>;
};

export default AppIconComponent;
