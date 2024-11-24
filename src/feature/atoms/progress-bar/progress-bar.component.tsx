import React, { Component, createRef } from "react";
import "./progress-bar.style.scss";

interface ProgressBarProps {
  leftRectangleWidth: string;
  theme: "light-theme" | "dark-theme";
}

export class ProgressBarComponent extends Component<ProgressBarProps> {
  private leftRectangleRef: React.RefObject<HTMLDivElement>;

  constructor(props: ProgressBarProps) {
    super(props);
    this.leftRectangleRef = createRef();
  }

  componentDidUpdate(prevProps: ProgressBarProps) {
    if (prevProps.leftRectangleWidth !== this.props.leftRectangleWidth && this.leftRectangleRef.current) {
      this.leftRectangleRef.current.style.width = `${this.props.leftRectangleWidth}%`;
    }
  }

  render() {
    const { theme, leftRectangleWidth } = this.props;
    const classForLeftRectangle = `progress-bar--left--${theme}`;
    const classForRightRectangle = `progress-bar--right--${theme}`;

    return (
      <div className="progress-bar">
        <div className={`right-rectangle ${classForRightRectangle}`}></div>
        <div
          ref={this.leftRectangleRef}
          className={`left-rectangle ${classForLeftRectangle}`}
          style={ {width: `${leftRectangleWidth}%`} }
        ></div>
      </div>
    );
  }
}

export default ProgressBarComponent;
