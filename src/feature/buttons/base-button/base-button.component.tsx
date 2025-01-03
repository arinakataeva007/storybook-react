import React, { MouseEventHandler, useEffect, useRef } from "react";
import "./base-button.style.scss";
import { SizeProps, ThemeProps } from "../../../shared/defaultProps";

export interface BaseButtonProps extends SizeProps, ThemeProps {
  name: string;
  isOwner?: boolean;
  disabled?: boolean;
  onAction?: MouseEventHandler<HTMLButtonElement>;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  name,
  isOwner,
  size,
  theme,
  disabled,
  onAction,
}) => {
  const baseBtnEl = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (disabled && baseBtnEl.current) {
      baseBtnEl.current.disabled = true;
    } else if (baseBtnEl.current) {
      baseBtnEl.current.disabled = false;
    }
  }, [disabled]);

  const removeFocus = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (baseBtnEl.current) {
      baseBtnEl.current.blur();
    }
    if (onAction) {
      onAction(event);
    }
  };

  const getClasses = () => {
    const mode = isOwner ? "with-owner" : "";
    if (disabled) {
      return `symbol-size--${size} symbol-theme--disabled--${theme} symbol-disabled ${mode}`;
    }
    return `symbol-size--${size} symbol-theme--${theme} ${mode}`;
  };

  const renderIcon = () => {
    switch (name) {
      case "question_mark":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_8335"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_8335)">
              <path
                d="M7.0667 10.6667C7.0667 9.76667 7.14725 9.11944 7.30837 8.725C7.46948 8.33056 7.81114 7.9 8.33337 7.43333C8.78892 7.03333 9.13614 6.68611 9.37503 6.39167C9.61392 6.09722 9.73337 5.76111 9.73337 5.38333C9.73337 4.92778 9.58059 4.55 9.27503 4.25C8.96948 3.95 8.54448 3.8 8.00003 3.8C7.43337 3.8 7.00281 3.97222 6.70837 4.31667C6.41392 4.66111 6.20559 5.01111 6.08337 5.36667L4.3667 4.63333C4.60003 3.92222 5.02781 3.30556 5.65003 2.78333C6.27225 2.26111 7.05559 2 8.00003 2C9.1667 2 10.0639 2.325 10.6917 2.975C11.3195 3.625 11.6334 4.40556 11.6334 5.31667C11.6334 5.87222 11.5139 6.34722 11.275 6.74167C11.0361 7.13611 10.6611 7.58333 10.15 8.08333C9.60559 8.60556 9.27503 9.00278 9.15837 9.275C9.0417 9.54722 8.98337 10.0111 8.98337 10.6667H7.0667ZM8.00003 14.6667C7.63337 14.6667 7.31948 14.5361 7.05837 14.275C6.79725 14.0139 6.6667 13.7 6.6667 13.3333C6.6667 12.9667 6.79725 12.6528 7.05837 12.3917C7.31948 12.1306 7.63337 12 8.00003 12C8.3667 12 8.68059 12.1306 8.9417 12.3917C9.20281 12.6528 9.33337 12.9667 9.33337 13.3333C9.33337 13.7 9.20281 14.0139 8.9417 14.275C8.68059 14.5361 8.3667 14.6667 8.00003 14.6667Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      case "app":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_7913"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_7913)">
              <path
                d="M11.1 8.66679L7.33333 4.90012L11.1 1.13345L14.8667 4.90012L11.1 8.66679ZM2 7.33345V2.00012H7.33333V7.33345H2ZM8.66667 14.0001V8.66679H14V14.0001H8.66667ZM2 14.0001V8.66679H7.33333V14.0001H2ZM3.33333 6.00012H6V3.33345H3.33333V6.00012ZM11.1167 6.80012L13 4.91679L11.1167 3.03345L9.23333 4.91679L11.1167 6.80012ZM10 12.6668H12.6667V10.0001H10V12.6668ZM3.33333 12.6668H6V10.0001H3.33333V12.6668Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      case "app_fill":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_7900"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_7900)">
              <path
                d="M11.1 8.66664L7.33333 4.89997L11.1 1.1333L14.8667 4.89997L11.1 8.66664ZM2 7.3333V1.99997H7.33333V7.3333H2ZM8.66667 14V8.66664H14V14H8.66667ZM2 14V8.66664H7.33333V14H2Z"
                fill="#1D8828"
              />
            </g>
          </svg>
        );
      case "plc":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_38_8304)">
              <mask
                id="mask0_38_8304"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect
                  x="16"
                  width="16"
                  height="16"
                  transform="rotate(90 16 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_38_8304)">
                <path
                  d="M12.1053 5C12.1053 4.72222 12.0131 4.48622 11.8286 4.292C11.6446 4.09733 11.4211 4 11.1579 4C10.8947 4 10.6712 4.09733 10.4872 4.292C10.3027 4.48622 10.2105 4.72222 10.2105 5C10.2105 5.27778 10.3027 5.51378 10.4872 5.708C10.6712 5.90267 10.8947 6 11.1579 6C11.4211 6 11.6446 5.90267 11.8286 5.708C12.0131 5.51378 12.1053 5.27778 12.1053 5ZM5.78947 5C5.78947 4.72222 5.69726 4.48622 5.51284 4.292C5.32884 4.09733 5.10526 4 4.84211 4C4.57895 4 4.35537 4.09733 4.17137 4.292C3.98695 4.48622 3.89474 4.72222 3.89474 5C3.89474 5.27778 3.98695 5.51378 4.17137 5.708C4.35537 5.90267 4.57895 6 4.84211 6C5.10526 6 5.32884 5.90267 5.51284 5.708C5.69726 5.51378 5.78947 5.27778 5.78947 5ZM14 2.66667L14 13.3333C14 13.5222 13.9396 13.6804 13.8187 13.808C13.6975 13.936 13.5474 14 13.3684 14L8.94737 14C8.76842 14 8.61853 13.936 8.49768 13.808C8.37642 13.6804 8.31579 13.5222 8.31579 13.3333L8.31579 2.66667C8.31579 2.47778 8.37642 2.31956 8.49768 2.192C8.61853 2.064 8.76842 2 8.94737 2L13.3684 2C13.5474 2 13.6975 2.064 13.8187 2.192C13.9396 2.31956 14 2.47778 14 2.66667ZM12.7368 3.33333L9.57895 3.33333L9.57895 12.6667L12.7368 12.6667L12.7368 3.33333ZM7.68421 2.66667L7.68421 13.3333C7.68421 13.5222 7.62379 13.6804 7.50295 13.808C7.38168 13.936 7.23158 14 7.05263 14L2.63158 14C2.45263 14 2.30274 13.936 2.1819 13.808C2.06063 13.6804 2 13.5222 2 13.3333L2 2.66667C2 2.47778 2.06063 2.31956 2.1819 2.192C2.30274 2.064 2.45263 2 2.63158 2L7.05263 2C7.23158 2 7.38169 2.064 7.50295 2.192C7.62379 2.31956 7.68421 2.47778 7.68421 2.66667ZM6.42105 3.33333L3.26316 3.33333L3.26316 12.6667L6.42105 12.6667L6.42105 3.33333Z"
                  fill="#42444A"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_38_8304">
                <rect width="16" height="16" rx="2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "circuit":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_7861"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_7861)">
              <path
                d="M9.99992 14V12H7.33325V5.33333H5.99992V7.33333H1.33325V2H5.99992V4H9.99992V2H14.6666V7.33333H9.99992V5.33333H8.66658V10.6667H9.99992V8.66667H14.6666V14H9.99992ZM11.3333 6H13.3333V3.33333H11.3333V6ZM11.3333 12.6667H13.3333V10H11.3333V12.6667ZM2.66659 6H4.66658V3.33333H2.66659V6Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      case "table":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_8404"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_8404)">
              <path
                d="M2 14V2H14V14H2ZM3.33333 6H12.6667V3.33333H3.33333V6ZM6.88333 9.33333H9.11667V7.33333H6.88333V9.33333ZM6.88333 12.6667H9.11667V10.6667H6.88333V12.6667ZM3.33333 9.33333H5.55V7.33333H3.33333V9.33333ZM10.45 9.33333H12.6667V7.33333H10.45V9.33333ZM3.33333 12.6667H5.55V10.6667H3.33333V12.6667ZM10.45 12.6667H12.6667V10.6667H10.45V12.6667Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      case "add":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_7896"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_7896)">
              <path
                d="M4.66667 11.3333V4.66667H11.3333V11.3333H4.66667ZM6 10H10V6H6V10ZM2 11.3333V10H3.33333V11.3333H2ZM2 6V4.66667H3.33333V6H2ZM4.66667 14V12.6667H6V14H4.66667ZM4.66667 3.33333V2H6V3.33333H4.66667ZM10 14V12.6667H11.3333V14H10ZM10 3.33333V2H11.3333V3.33333H10ZM12.6667 11.3333V10H14V11.3333H12.6667ZM12.6667 6V4.66667H14V6H12.6667Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      case "close":
        return (
          <svg
            className="close"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_38_7842"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_38_7842)">
              <path
                d="M4.26659 12.6667L3.33325 11.7333L7.06659 8.00001L3.33325 4.26668L4.26659 3.33334L7.99992 7.06668L11.7333 3.33334L12.6666 4.26668L8.93325 8.00001L12.6666 11.7333L11.7333 12.6667L7.99992 8.93334L4.26659 12.6667Z"
                fill="#42444A"
              />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      ref={baseBtnEl}
      className={`container ${getClasses()}`}
      onClick={removeFocus}
    >
      {renderIcon()}
    </button>
  );
};

export default BaseButton;
