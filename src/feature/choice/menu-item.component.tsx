import React, { useState, useRef, useEffect } from "react";
import CollapseIcon from "../../feature/icons/collapse-icon/collapse-icon.component";
import PopUp from "../../feature/floating/pop-up.component";
import Label from "../../feature/atoms/label/label.component";
import './menu-item.style.scss';
interface MenuItemProps {
  isOwner?: boolean;
  hint?: string;
  popUpScroll?: boolean;
  showCollapseIcon?: boolean;
  isActive?: boolean;
  showHint?: boolean;
  theme: "light-theme" | "dark-theme";
  label: string;
  disabled?: boolean;
  showIcon?: boolean;
  showText?: boolean;
  activeState?: (state: boolean) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  isOwner = false,
  hint,
  popUpScroll = false,
  showCollapseIcon = true,
  isActive = false,
  showHint = false,
  theme,
  label,
  disabled = false,
  showIcon = true,
  showText = true,
  activeState,
}) => {
  const [active, setActive] = useState(isActive);
  const menuItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuItemRef.current &&
        !menuItemRef.current.contains(event.target as Node)
      ) {
        setActive(false);
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeDropdown = () => {
    if (activeState) activeState(active);
  };

  const openPopUp = () => {
    setActive(!active);
    if (activeState) activeState(!active);
  };

  const classes = [
    `menu-item-${theme}`,
    isOwner ? "with-owner" : "",
    disabled ? `menu-item-disabled-${theme}` : "",
  ].join(" ");

  return (
    <section
      tabIndex={0}
      className={`menu-item-container ${classes}`}
      onClick={openPopUp}
      ref={menuItemRef}
    >
      <Label
        isOwner={true}
        disabled={disabled}
        showIcon={showIcon}
        showText={showText}
        size="base"
        label={label}
        theme={theme}
      >
        <div>{/* Any additional content can go here */}</div>
      </Label>

      <div className="footer-container">
        {showHint && (
          <Label
            size="base"
            showIcon={false}
            showText={true}
            label={hint!}
            isOwner={true}
            theme={theme}
          />
        )}
        {showCollapseIcon && (
          <button
            className="collapse-btn"
            onMouseEnter={openPopUp}
            disabled={disabled}
          >
            <CollapseIcon
              disabled={disabled}
              size="base"
              theme={theme}
              rotate="right"
              isFill={false}
              fill={""}
            />
          </button>
        )}
      </div>

      {active && showCollapseIcon && (
        <PopUp
          theme={theme}
          isModal={false}
          scroll={popUpScroll}
          children={undefined}
        >
        </PopUp>
      )}
    </section>
  );
};

export default MenuItem;
