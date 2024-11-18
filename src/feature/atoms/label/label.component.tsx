import React from "react";
import "./label.style.scss";

interface LabelComponentProps {
  label: string;
  size: "base" | "mid" | "large" | "extra-large";
  theme: "light-theme" | "dark-theme";
  iconPadding: "left" | "right";
  isOwner?: boolean;
  disabled?: boolean;
  showIcon?: boolean;
  showText?: boolean;
  children?: React.ReactNode;
}

export const LabelComponent: React.FC<LabelComponentProps> = ({
  label,
  size = "mid",
  theme = "light-theme",
  iconPadding = "left",
  isOwner = false,
  disabled = false,
  showIcon = true,
  showText = true,
  children,
}) => {
  const getClasses = (): string[] => {
    const mode = isOwner ? "label-with-owner" : "label-without-owner";
    if (disabled) {
      return [
        "label--disabled",
        `label--size--${size}`,
        `label--disabled--${theme}`,
        mode,
      ];
    }
    return [`label--size--${size}`, `label--theme--${theme}`, mode];
  };

  const getClassPadding = (): string[] => {
    if (iconPadding === "left") return ["symbol-padding--left"];
    if (iconPadding === "right") return ["symbol-padding--right"];
    return [];
  };

  return (
    <section className={getClasses().join(" ")}>
      {showIcon && (
        <div className="icon-container" data-position="prev-icon">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) && child.props["data-position"] === "prev-icon"
              ? child
              : null
          )}
        </div>
      )}
      {showText && (
        <div className={`label-container ${getClassPadding().join(" ")}`}>
          {label}
        </div>
      )}
      {showIcon && (
        <div className="icon-container" data-position="after-icon">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) && child.props["data-position"] === "after-icon"
              ? child
              : null
          )}
        </div>
      )}
    </section>
  );
};

export default LabelComponent;
