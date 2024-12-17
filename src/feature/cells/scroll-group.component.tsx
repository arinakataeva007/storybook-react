import React, { useRef, forwardRef } from 'react';
import './scroll-group.style.scss';

interface ScrollGroupProps {
  orientation?: 'vertical' | 'horizontal';
  theme: 'light-theme'|'dark-theme';
  children: React.ReactNode;
}

const ScrollGroup = forwardRef<HTMLDivElement, ScrollGroupProps>(
  ({ orientation = 'vertical', theme, children }, ref) => {

    const contentGroupRef = useRef<HTMLDivElement>(null);

    const classes = [
      `scroll-group--${theme}`,
      `scroll-group--${orientation}`,
    ].join(' ');

    return (
      <div ref={ref} className={`scroll-group ${classes}`}>
        <div ref={contentGroupRef} className="content-group">
          {children}
        </div>
      </div>
    );
  }
);

ScrollGroup.displayName = 'ScrollGroup';

export default ScrollGroup;
