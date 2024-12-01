import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './rich-text.style.scss';

// Определяем типы пропсов компонента
interface RichTextFieldProps {
  placeholder?: string;
  hint?: string;
  showHint?: boolean;
  theme?: string;
  onInputChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

// Определяем интерфейс для рефа
export interface RichTextFieldRef {
  setValue: (newValue: string) => void;
  getValue: () => string;
}

export const RichTextField = forwardRef<RichTextFieldRef, RichTextFieldProps>(
  (
    {
      placeholder = '',
      hint = '',
      showHint = false,
      theme = '',
      onInputChange,
      onValueChange,
      disabled = false,
    },
    ref
  ) => {
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

    // Используем useImperativeHandle для предоставления методов рефа
    useImperativeHandle(ref, () => ({
      setValue: (newValue: string) => setValue(newValue),
      getValue: () => value,
    }));

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
  }
);

export default RichTextField;
