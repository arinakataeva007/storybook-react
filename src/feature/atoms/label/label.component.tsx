import React from 'react';
import './label.style.scss';
interface LabelComponentProps {
  showIcon: boolean;
  showText: boolean;
  label: string;
  iconPadding?: 'left' | 'right';
  isOwner?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';  // Пример возможных размеров
  theme?: 'light' | 'dark';  // Пример возможных тем
}

export const LabelComponent: React.FC<LabelComponentProps> = ({
  showIcon,
  showText,
  label,
  iconPadding = 'left',
  isOwner = false,
  disabled = false,
  size = 'medium',
  theme = 'light',
}) => {
  const getClasses = (): string[] => {
    const mode = isOwner ? 'label-with-owner' : 'label-without-owner';
    const disabledClass = disabled ? `label--disabled label--disabled--${theme}` : '';
    const sizeClass = `label--size--${size}`;
    const themeClass = `label--theme--${theme}`;
    return [disabledClass, sizeClass, themeClass, mode].filter(Boolean);
  };

  const getPaddingClass = (): string[] => {
    if (iconPadding === 'left') {
      return ['symbol-padding--left'];
    } else if (iconPadding === 'right') {
      return ['symbol-padding--right'];
    }
    return [];
  };

  return (
    <section className={getClasses().join(' ')}>
      {showIcon && <div className="icon-left">{/* Здесь ваш иконка слева, если есть */}</div>}
      
      {showText && (
        <div className={`label-container ${getPaddingClass().join(' ')}`}>
          {label}
        </div>
      )}
      
      {showIcon && <div className="icon-right">{/* Здесь ваш иконка справа, если есть */}</div>}
    </section>
  );
};

export default LabelComponent;
