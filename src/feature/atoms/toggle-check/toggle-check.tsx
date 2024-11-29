import React, { ChangeEvent } from 'react';
import './toggle-check.style.scss';
interface ToggleCheckProps {
  toggleId: string;
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
  disabled?: boolean;
  theme: string;
}

export const ToggleCheckComponent: React.FC<ToggleCheckProps> = ({
  toggleId,
  value,
  onChange,
  onBlur,
  disabled = false,
  theme,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
    onBlur();
  };

  const toggleClass = disabled
    ? `toggle--${theme} toggle--disabled--${theme}`
    : `toggle--${theme}`;

  return (
    <div className="toggle-check-container">
      <input
        id={toggleId}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        className="toggle-check"
      />
      <label htmlFor={toggleId} className={`toggle-btn ${toggleClass}`} />
    </div>
  );
};

export default ToggleCheckComponent;
