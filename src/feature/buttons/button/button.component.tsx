import React, { Children, MouseEventHandler } from "react";
import { LabelComponent } from "../../atoms/label/label.component";
import { BaseButton } from "../../buttons/base-button/base-button.component";
import "./button.style.scss";

interface ButtonComponentProps {
  label: string;
  state?: "primary" | "secondary";
  theme: "light-theme" | "dark-theme";
  disabled?: boolean;
  showIcon?: boolean;
  showText?: boolean;
  nameIcon?: string;
  onAction?: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  state = "secondary",
  theme,
  disabled = false,
  showIcon = true,
  showText = true,
  nameIcon = 'circuit',
  onAction,
}) => {
  const classes = [
    `button--${state}`,
    `button--${state}--${theme}`,
    disabled ? `button--disabled--${state}` : "",
    disabled ? `button--disabled--${state}--${theme}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onAction) {
      onAction(event);
    }
  };

  return (
    <button
      className={`button ${classes}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="label-container">
        <LabelComponent
          isOwner={true}
          showIcon={showIcon}
          showText={showText}
          label={label}
          size={"base"}
          theme={theme}
          iconPadding={"right"}
        >
          {showIcon && (
            <BaseButton
              name={nameIcon}
              data-position="prev-icon"
              disabled={disabled}
              theme={theme}
              isOwner={true}
              size={'base'}
            />
          )}
        </LabelComponent>
      </div>
    </button>
  );
};

export default ButtonComponent;
