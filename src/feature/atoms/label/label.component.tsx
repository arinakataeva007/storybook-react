import React from 'react';
import './label.style.scss';

interface LabelComponentProps {
  showIcon: boolean;
  showText: boolean;
  label: string;
  iconPadding?: 'left' | 'right';
  isOwner?: boolean;
  disabled?: boolean;
  size?: 'base' | 'mid' | 'large' | 'extra-large';
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
}

export const LabelComponent: React.FC<LabelComponentProps> = ({
  showIcon,
  showText,
  label,
  iconPadding = 'left',
  isOwner = false,
  disabled = false,
  size = 'mid',
  theme = 'light',
  children,
}) => {
  const getClasses = (): string => {
    const mode = isOwner ? 'label-with-owner' : 'label-without-owner';
    const disabledClass = disabled ? `label--disabled label--disabled--${theme}` : '';
    const paddingClass = iconPadding === 'left' ? 'symbol-padding--left' : 'symbol-padding--right';
    return `${mode} ${disabledClass} label--size--${size} label--theme--${theme} ${paddingClass}`.trim();
  };

  return (
    <section className={getClasses()}>
      {showIcon && children && (
        <div className="icon-container">
          {children}
        </div>
      )}
      {showText && <div className="label-container">{label}</div>}
    </section>
  );
};

export default LabelComponent;