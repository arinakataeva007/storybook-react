import React, { useState, useRef, useEffect } from "react";
import {
  RichTooltip,
  RichTooltipProps,
} from "../../floating/rich-tooltil/rich-tooltip.component";
import { BaseButton } from "../../buttons/base-button/base-button.component";
import './formated-text-field.style.scss';

interface FormatedTextProps extends RichTooltipProps {
  placeholder?: string;
  rlValue: string;
  onInput: (value: string) => void;
}

export const FormatedTextField: React.FC<FormatedTextProps> = ({
  placeholder = "",
  rlValue = "",
  onInput,
  disabled = false,
  theme = "light-theme",
  textRich,
}) => {
  let [value, setValue] = useState("");
  let [maxLength, setMaxLength] = useState(placeholder.length);
  let [richIsOpen, setOpen] = useState(false);
  let [onInputs, setOnInputs] = useState(false);
  let [constPlaceholder, setPlaceholder] = useState(placeholder);

  const fieldRef = useRef<HTMLInputElement | null>(null);
  const richTooltip = useRef<HTMLDivElement | null>(null);
  const errorIcon = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (value !== "" && rlValue && !onInputs) {
      constPlaceholder = "";
    } else if (!onInputs) {
      constPlaceholder = placeholder;
    }
  }, [rlValue]);

  const replaceSymbol = (event: any) => {
    setOnInputs(onInputs = true);
    setValue((value = event.target.value));
    const index = event.target.value.length - 1;
    if (fieldRef.current) {
      if (event.target.value == "" || !event.target.value) {
        setPlaceholder((constPlaceholder = placeholder));
      } else if (
        constPlaceholder === placeholder ||
        (event.target.value !== "" && constPlaceholder !== "")
      ) {
        const arrPlaceholder = constPlaceholder.split("");
        arrPlaceholder[index] = fieldRef.current.value[index];
        setPlaceholder((constPlaceholder = arrPlaceholder.join("")));
      }
    }
  };
  
  const closeTooltip = (event: any) => {
    setOpen((richIsOpen = !richIsOpen));
  };

  return (
    <section className="formated-field">
      <span className="placeholder">{constPlaceholder}</span>
      <input
        ref={fieldRef}
        className="input"
        type="text"
        disabled={disabled}
        minLength={maxLength}
        onInput={replaceSymbol}
      ></input>
      <div ref={errorIcon} className="errorName">
        <BaseButton
          name="question_mark"
          size="base"
          theme={theme}
          onAction={closeTooltip}
        ></BaseButton>
      </div>
      <div className="richTooltip" ref={richTooltip}>
        {richIsOpen && (
          <RichTooltip
            theme={theme}
            tailPlacement={"L"}
            textRich={textRich}
            onHandleCloseClick={closeTooltip}
          ></RichTooltip>
        )}
      </div>
    </section>
  );
};
export default FormatedTextField;
