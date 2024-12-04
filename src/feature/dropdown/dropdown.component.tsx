import React, { useState, useRef, useEffect } from "react";
import Label from "../atoms/label/label.component";
import CollapseIcon from "../../feature/icons/collapse-icon/collapse-icon.component";
import PopUp from "../../feature/floating/pop-up.component";
import "./dropdown.styles.scss";

interface DropdownProps {
  popUpScroll?: boolean;
  collapsePlacement?: "left" | "right";
  theme?: "light-theme" | "dark-theme";
  label?: string;
  showIcon?: boolean;
  showText?: boolean;
  disabled?: boolean;
  onActiveStateChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  popUpScroll = false,
  collapsePlacement = "right",
  theme = "light-theme",
  label = "",
  showIcon = false,
  showText = false,
  disabled = false,
  onActiveStateChange = () => {},
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const getClasses = () => {
    if (disabled) {
      return [`menu-item-disabled-${theme}`];
    }
    return [`menu-item-${theme}`];
  };

  return (
    <div
      ref={dropdownRef}
      tabIndex={0}
      className={`dropdown-container ${getClasses().join(" ")}`}
      onClick={openDropdown}
    >
      {collapsePlacement === "left" && (
        <div className="footer-container">
          <button className="collapse-btn" disabled={disabled}>
            <CollapseIcon
              disabled={disabled}
              size="base"
              theme={theme}
              rotate="down"
            />
          </button>
        </div>
      )}

      <Label
        isOwner
        disabled={disabled}
        showIcon={showIcon}
        showText={showText}
        size="base"
        label={label}
        theme={theme}
      >
        {children}
      </Label>

      {collapsePlacement === "right" && (
        <div className="footer-container">
          <button className="collapse-btn" disabled={disabled}>
            <CollapseIcon
              disabled={disabled}
              size="base"
              theme={theme}
              rotate="down"
            />
          </button>
        </div>
      )}

      {isOpen && (
        <PopUp
          theme={theme}
          isModal={false}
          scroll={popUpScroll}
        >
          <div onMouseLeave={hideDropdown}>{children}</div>
        </PopUp>
      )}
    </div>
  );
};

export default Dropdown;
