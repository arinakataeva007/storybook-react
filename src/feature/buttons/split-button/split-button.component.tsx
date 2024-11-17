import React, { Component, ReactNode } from 'react';
import './split-button.style.scss';

interface SplitButtonSegmentProps {
  size?: string;
  theme: string;
  onSendState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
}

class SplitButtonSegment extends Component<SplitButtonSegmentProps> {
  static defaultProps = {
    size: 'base',
    disabled: false,
  };

  constructor(props: SplitButtonSegmentProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  classes() {
    const { size, theme } = this.props;
    return [`split-button--size--${size}`, `split-button--${theme}`].join(' ');
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const { onSendState } = this.props;
    if (onSendState) {
      onSendState(event);
    }
  }

  render() {
    const { children, disabled } = this.props;

    return (
      <button
        onClick={this.handleClick}
        className={`split-btn ${this.classes()}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default SplitButtonSegment;
