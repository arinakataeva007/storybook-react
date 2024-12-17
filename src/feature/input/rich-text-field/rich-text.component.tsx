import React, { useState } from 'react';
import './rich-text.style.scss';

interface RichTextFieldProps {
  placeholder?: string;
  hint?: string;
  showHint?: boolean;
  theme?: string;
  onInputChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

export const RichTextField: React.FC<RichTextFieldProps> = ({
  placeholder = '',
  hint = '',
  showHint = false,
  theme = '',
  onInputChange,
  onValueChange,
  disabled = false,
}) => {
  const [value, setValue] = useState<string>('');

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onInputChange) onInputChange(newValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  return (
    <div className='rich-text'>
      <textarea
        className={`rich-text-field ${theme === 'dark-theme' ? 'dark-theme' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onInput={handleInput}
        onChange={handleChange}
      ></textarea>
      {showHint && <div className="hint-container-rich">{hint}</div>}
    </div>
  );
};

export default RichTextField;
