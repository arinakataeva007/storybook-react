import React, { Component } from 'react';
import './scroll.style.scss';

interface ScrollComponentProps {
  rotation?: 'horizontal' | 'vertical';
  theme: string;
}

class ScrollComponent extends Component<ScrollComponentProps> {
  private scrollEl: React.RefObject<HTMLDivElement>;

  constructor(props: ScrollComponentProps) {
    super(props);
    this.scrollEl = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.updateScrollClass();
  }

  componentDidUpdate(prevProps: ScrollComponentProps) {
    if (prevProps.rotation !== this.props.rotation) {
      this.updateScrollClass();
    }
  }

  updateScrollClass() {
    const { rotation } = this.props;
    if (this.scrollEl.current) {
      if (rotation === 'horizontal') {
        this.scrollEl.current.classList.add('scroll--horizontaly');
        this.scrollEl.current.classList.remove('scroll--verticaly');
      } else {
        this.scrollEl.current.classList.add('scroll--verticaly');
        this.scrollEl.current.classList.remove('scroll--horizontaly');
      }
    }
  }

  render() {
    const { theme } = this.props;
    const classes = `scroll--${theme}`;

    return (
      <div className="scroll-container">
        <div ref={this.scrollEl} className={`scroll ${classes}`}></div>
      </div>
    );
  }
}

export default ScrollComponent;
