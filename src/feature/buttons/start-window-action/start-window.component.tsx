import React from 'react';
import LabelComponent from '../../atoms/label/label.component'; 
import './start-window.style.scss';

const StartWindowAction = ({ label, theme, disabled, onSendState }:any) => {
  const classes = () => {
    return [`start-btn--${theme}`].join(' ');
  };

  const handleClick = (event:any) => {
    if (onSendState) {
      onSendState(event);
    }
  };

  return (
    <button
      className={`start-btn ${classes()}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <LabelComponent
        label={label}
        size="base"
        isOwner={true}
        showIcon={false}
        showText={true}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <mask
          id="mask0_1241_598"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <rect width="16" height="16" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1241_598)">
          <path
            d="M7.33337 12.6667V8.66671H3.33337V7.33337H7.33337V3.33337H8.66671V7.33337H12.6667V8.66671H8.66671V12.6667H7.33337Z"
            fill="#42444A"
          />
        </g>
      </svg>
    </button>
  );
};

export default StartWindowAction;
