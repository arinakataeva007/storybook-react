import React, { MouseEventHandler } from 'react';
import './toggle-check.style.scss';
interface ToggleCheckProps {
  toggleId: string;
  value: boolean;
  onChange?: MouseEventHandler<HTMLInputElement>;
  onBlur: () => void;
  disabled?: boolean;
  theme: string;
}

export const ToggleCheckComponent: React.FC<ToggleCheckProps> = ({
  toggleId,
  value,
  onChange,
  disabled = false,
  theme,
}) => {

  const toggleClass = disabled
    ? `toggle--${theme} toggle--disabled--${theme}`
    : `toggle--${theme}`;

  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if(onChange){
      onChange(event);
    }
  }
  return (
    <div className="toggle-check-container">
      <input
        id={toggleId}
        type="checkbox"
        checked={value}
        onClick={handleClick}
        disabled={disabled}
        className="toggle-check"
      />
      <label htmlFor={toggleId} className={`toggle-btn ${toggleClass}`} />
    </div>
  );
};

export default ToggleCheckComponent;
