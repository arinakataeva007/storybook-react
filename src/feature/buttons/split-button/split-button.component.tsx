import React, { ReactNode } from 'react';
import './split-button.style.scss';

interface SplitButtonSegmentProps {
  size?: string;
  theme: string;
  onSendState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
}

const SplitButtonSegment: React.FC<SplitButtonSegmentProps> = ({
  size = 'base',
  theme,
  onSendState,
  disabled = false,
  children,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onSendState) {
      onSendState(event);
    }
  };

  const classes = () => {
    return [`split-button--size--${size}`, `split-button--${theme}`].join(' ');
  };

  return (
    <button
      onClick={handleClick}
      className={`split-btn ${classes()}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SplitButtonSegment;
