import React, { useEffect, useRef } from "react";
import "./progress-bar.style.scss";

interface ProgressBarProps {
  leftRectangleWidth: string;
  theme: "light-theme" | "dark-theme";
}

export const ProgressBarComponent: React.FC<ProgressBarProps> = ({ leftRectangleWidth, theme }) => {
  const leftRectangleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRectangleRef.current) {
      leftRectangleRef.current.style.width = `${leftRectangleWidth}%`;
    }
  }, [leftRectangleWidth]);

  const classForLeftRectangle = `progress-bar--left--${theme}`;
  const classForRightRectangle = `progress-bar--right--${theme}`;

  return (
    <div className="progress-bar">
      <div className={`right-rectangle ${classForRightRectangle}`}></div>
      <div
        ref={leftRectangleRef}
        className={`left-rectangle ${classForLeftRectangle}`}
        style={{ width: `${leftRectangleWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBarComponent;
