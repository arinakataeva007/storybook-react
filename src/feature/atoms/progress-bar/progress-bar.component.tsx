import React, { Component } from 'react';
import './progress-bar.style.scss';

interface ProgressBarComponentProps {
  leftRectangleWidth: number;
  theme: string;
}

class ProgressBarComponent extends Component<ProgressBarComponentProps> {
  private leftRectangleRef: React.RefObject<HTMLDivElement>;

  constructor(props: ProgressBarComponentProps) {
    super(props);
    this.leftRectangleRef = React.createRef<HTMLDivElement>();
  }

  componentDidUpdate(prevProps: ProgressBarComponentProps) {
    if (prevProps.leftRectangleWidth !== this.props.leftRectangleWidth && this.leftRectangleRef.current) {
      this.leftRectangleRef.current.style.width = `${this.props.leftRectangleWidth}%`;
    }
  }

  render() {
    const { leftRectangleWidth, theme } = this.props;
    const classForLeftRectangle = `progress-bar--left--${theme}`;
    const classForRightRectangle = `progress-bar--right--${theme}`;

    return (
      <div className="progress-bar">
        <div ref={this.leftRectangleRef} className={`left-rectangle ${classForLeftRectangle}`}></div>
        <div className={`right-rectangle ${classForRightRectangle}`}></div>
      </div>
    );
  }
}

export default ProgressBarComponent;
