import React, { useEffect, useRef, useState } from "react";
import "./text-field.style.scss";
import { LabelComponent } from "../../atoms/label/label.component";

interface TextFieldProps {
  type?: string;
  placeholder: string;
  showHint?: boolean;
  hint?: string;
  autofocus?: boolean;
  value: string;
  disabled?: boolean;
  theme: "light-theme" | "dark-theme";
  onChange: (value: string) => void;
  onInput: (value: string) => void;
  isValid?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  placeholder,
  showHint = false,
  hint = "",
  autofocus = false,
  value,
  disabled = false,
  theme,
  onChange,
  onInput,
  isValid = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    if (autofocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    onChange(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
  };

  const handleInvalid = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("error");
      if (disabled) {
        inputRef.current.classList.add("error--disabled");
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      if (!isValid) {
        inputRef.current.classList.add("error");
      } else {
        inputRef.current.classList.remove("error");
      }
    }
  }, [isValid]);

  useEffect(() => {
    if (showHint && hintRef.current && hint && inputRef.current) {
      const hintWidth = hintRef.current.getBoundingClientRect().width;
      console.log(hintWidth);
      inputRef.current.style.paddingRight = `${Math.round(hintWidth)}px`;
    }
  }, [showHint, hint]);

  return (
    <div className={`text-field-container ${theme}`}>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={internalValue}
        onChange={handleChange}
        onInput={handleInput}
        className={`input--${disabled ? "disabled" : "enabled"} ${theme}`}
      />
      {showHint && hint && (
        <div id="hint-container" ref={hintRef}>
          <LabelComponent
            isOwner={true}
            label={hint}
            size={"base"}
            theme={theme}
          >
          </LabelComponent>
        </div>
      )}
    </div>
  );
};

export default TextField;
