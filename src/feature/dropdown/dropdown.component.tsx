import React, { useState, useRef, useEffect } from "react";
import Label from "../atoms/label/label.component";
import CollapseIcon from "../../feature/icons/collapse-icon/collapse-icon.component";
import PopUp from "../floating/pop-up/pop-up.component";
import "./dropdown.styles.scss";

interface DropdownProps  {
  popUpScroll?: boolean;
  collapsePlacement?: "left" | "right";
  theme?: "light-theme" | "dark-theme";
  label?: string;
  showText?: boolean;
  disabled?: boolean;
  onActiveStateChange?: (isOpen: boolean) => void;
  children?:  React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  popUpScroll = false,
  collapsePlacement = "right",
  theme = "light-theme",
  label = "",
  showText = false,
  disabled = false,
  onActiveStateChange = () => {},
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const popUpRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      hideDropdown();
    }
  };

  const hideDropdown = () => {
    setIsOpen(false);
    onActiveStateChange(false);
  };

  const openDropdown = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      onActiveStateChange(newState);
      return newState;
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (popUpRef.current && isOpen) {
      popUpRef.current.style.position = "fixed";
      popUpRef.current.style.zIndex = "100";
      popUpRef.current.style.left = `${
        dropdownRef.current?.getBoundingClientRect().left
      }px`;
      popUpRef.current.style.top = `${
        dropdownRef.current?.getBoundingClientRect().bottom
      }px`;
    }
  }, [isOpen]);

  const getClasses = () => {
    if (disabled) {
      return ['dropdown-disabled', `dropdown-${theme}`];
    }
    return [`dropdown-${theme}`];
  };

  return (
    <section
      ref={dropdownRef}
      tabIndex={0}
      className={`dropdown-container ${getClasses().join(" ")}`}
      onClick={openDropdown}
    >
      {collapsePlacement === "left" && (
        <div className="footer-container">
          <CollapseIcon
            disabled={disabled}
            size="base"
            theme={theme}
            rotate="down"
          />
        </div>
      )}
      <div className="label-dropdown">
        <Label
          isOwner={true}
          disabled={disabled}
          showIcon={false}
          showText={showText}
          size="base"
          label={label}
          theme={theme}
        >
        </Label>
      </div>

      {collapsePlacement === "right" && (
        <div className="footer-container">
          <CollapseIcon
            disabled={disabled}
            size="base"
            theme={theme}
            rotate="down"
          />
        </div>
      )}

      {isOpen && (
        <div ref={popUpRef} className="popUp-dropdown-container">
          <PopUp theme={theme} isModal={false} scroll={popUpScroll}>
            <div onMouseLeave={hideDropdown}>{children}</div>
          </PopUp>
        </div>
      )}
    </section>
  );
};

export default Dropdown;
