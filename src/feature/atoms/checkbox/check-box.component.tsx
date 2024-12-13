import React, { useState, useEffect, useRef } from 'react';
import './check-box.style.scss';
interface CheckBoxProps {
  checkboxId: string;
  isIndeterminate?: boolean;
  rlValue: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  theme?: 'light-theme'|'dark-theme';
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  checkboxId,
  isIndeterminate = false,
  rlValue = false,
  disabled = false,
  onChange = () => {},
  theme = 'light-theme',
}) => {
  const [value, setValue] = useState(rlValue);
  const [type, setType] = useState<'off' | 'on' | 'indeterminate'>('off');
  const inputEl = useRef<HTMLInputElement>(null);
  const labelEl = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (isIndeterminate) {
      setType('indeterminate');
    } else if (value) {
      setType('on');
    } else {
      setType('off');
    }
  }, [value, isIndeterminate]);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.checked = value;
    }
  }, [value]);

  const handleChange = () => {
    const newValue = !value;
    setValue(newValue);
    onChange(newValue);
  };

  const handleBlur = () => {
    if (inputEl.current) {
      inputEl.current.blur();
    }
  };

  const getClasses = () => {
    return disabled ? [`check-box--disabled--${theme}`] : [`check-box--${theme}`];
  };

  return (
    <div>
      <input
        ref={inputEl}
        className="checkbox"
        type="checkbox"
        id={checkboxId}
        checked={value}
        disabled={disabled}
        onChange={handleChange}
        onClick={handleBlur}
      />
      <label
        ref={labelEl}
        htmlFor={checkboxId}
        onClick={handleBlur}
        className={getClasses().join(' ')}
      >
        {type === 'off' && (
          <svg
            className="svg--default--off"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_866_1284"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_866_1284)">
              <path
                d="M3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z"
                fill="#42444A"
              />
            </g>
          </svg>
        )}
        {type === 'on' && (
          <svg
            className="svg--default"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_1081_1389"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1081_1389)">
              <path
                d="M6.71311 11.1536L7.06667 11.5071L7.42022 11.1536L12.1202 6.45355L12.4738 6.1L12.1202 5.74645L11.1869 4.81311L10.8333 4.45956L10.4798 4.81311L7.06667 8.22623L5.52022 6.67978L5.16667 6.32623L4.81311 6.67978L3.87978 7.61311L3.52623 7.96667L3.87978 8.32022L6.71311 11.1536ZM3.33333 13.5C3.10032 13.5 2.91315 13.423 2.74489 13.2551C2.57704 13.0869 2.5 12.8997 2.5 12.6667V3.33333C2.5 3.10032 2.57704 2.91315 2.74489 2.74489C2.91315 2.57704 3.10032 2.5 3.33333 2.5H12.6667C12.8997 2.5 13.0869 2.57704 13.2551 2.74489C13.423 2.91315 13.5 3.10032 13.5 3.33333V12.6667C13.5 12.8997 13.423 13.0869 13.2551 13.2551C13.0869 13.423 12.8997 13.5 12.6667 13.5H3.33333Z"
                fill="#31C2E2"
                stroke="#9CEDFF"
              />
            </g>
          </svg>
        )}
        {type === 'indeterminate' && (
          <svg
            className="svg--default"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_1081_1469"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1081_1469)">
              <path
                d="M4.16667 8.66667V9.16667H4.66667H11.3333H11.8333V8.66667V7.33333V6.83333H11.3333H4.66667H4.16667V7.33333V8.66667ZM3.33333 13.5C3.10032 13.5 2.91315 13.423 2.74489 13.2551C2.57704 13.0869 2.5 12.8997 2.5 12.6667V3.33333C2.5 3.10032 2.57704 2.91315 2.74489 2.74489C2.91315 2.57704 3.10032 2.5 3.33333 2.5H12.6667C12.8997 2.5 13.0869 2.57704 13.2551 2.74489C13.423 2.91315 13.5 3.10032 13.5 3.33333V12.6667C13.5 12.8997 13.423 13.0869 13.2551 13.2551C13.0869 13.423 12.8997 13.5 12.6667 13.5H3.33333Z"
                fill="#31C2E2"
                stroke="#31C2E2"
              />
            </g>
          </svg>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
