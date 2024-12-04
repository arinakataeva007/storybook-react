import React, { useEffect, useRef, useState } from "react";
import './collapse-icon.style.scss';
interface CollapseIconProps {
  isFill?: boolean;
  rotate: "up" | "down" | "right" | "left";
  fill?: string;
  size: "base" | "mid" | "large" | "extra-large";
  disabled?: boolean;
  theme: string;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({
  isFill,
  rotate,
  fill,
  size,
  disabled,
  theme,
}) => {
  const [pathFill, setPathFill] = useState(fill);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const pathElement = svgRef.current?.querySelector("path");
    if (pathElement) {
      pathElement.setAttribute("fill", pathFill!);
    }
  }, [pathFill]);

  const getClasses = () => {
    const mode = disabled ? `symbol-disabled--${theme}` : "";
    return [
      `symbol-size--${size}`,
      `symbol-fill--${theme}`,
      `symbol-rotate--${rotate}`,
      mode,
    ].join(" ");
  };

  const renderIcon = () => {
    if (isFill) {
      return (
        <button className="collapse-icon">
          <svg
            ref={svgRef}
            className={getClasses()}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_679_1224"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_679_1224)">
              <path d="M4.66663 9.33333L7.99996 6L11.3333 9.33333H4.66663Z" />
            </g>
          </svg>
        </button>
      );
    } else {
      return (
        <button className="collapse-icon">
          <svg
            ref={svgRef}
            className={getClasses()}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <mask
              id="mask0_640_1351"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_640_1351)">
              <path d="M8 5.31667L12 9.31667L11.0667 10.25L8 7.18333L4.93333 10.25L4 9.31667L8 5.31667Z" />
            </g>
          </svg>
        </button>
      );
    }
  };

  return <>{renderIcon()}</>;
};

export default CollapseIcon;
