import React, { Component } from 'react';
import './slider.style.scss';

interface SliderComponentProps {
  theme: string;
  disabled: boolean;
  onSendProgress?: (value: string) => void; // Сделать этот пропс необязательным
}

export class SliderComponent extends Component<SliderComponentProps> {
  private scrollbarRef: React.RefObject<HTMLInputElement>;
  private scrollTrackRef: React.RefObject<HTMLDivElement>;

  constructor(props: SliderComponentProps) {
    super(props);
    this.scrollbarRef = React.createRef<HTMLInputElement>();
    this.scrollTrackRef = React.createRef<HTMLDivElement>();

    this.onInput = this.onInput.bind(this);
  }

  componentDidMount() {
    this.updateScrollTrack();
  }

  updateScrollTrack() {
    const { onSendProgress } = this.props;

    if (this.scrollTrackRef.current && this.scrollbarRef.current) {
      const value = this.scrollbarRef.current.value;
      this.scrollTrackRef.current.style.width = value + '%';
      (onSendProgress || (() => {}))(value);
    }
  }

  onInput() {
    const { onSendProgress } = this.props;

    if (this.scrollTrackRef.current && this.scrollbarRef.current) {
      const value = this.scrollbarRef.current.value;
      this.scrollTrackRef.current.style.width = `${value}%`;
      (onSendProgress || (() => {}))(value); 
    }
  }

  render() {
    const { theme, disabled } = this.props;

    const classes = disabled
      ? `slider--${theme} slider--disabled--${theme}`
      : `slider--${theme}`;

    return (
      <div className={`slider-container ${classes}`}>
        <input
          ref={this.scrollbarRef}
          onInput={this.onInput}
          disabled={disabled}
          type="range"
          className="slider"
          id="myRange"
        />
        <div ref={this.scrollTrackRef} className="scroll-div"></div>
      </div>
    );
  }
}

export default SliderComponent;
