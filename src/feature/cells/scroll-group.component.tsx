import React, { useEffect, useRef, useState, forwardRef } from 'react';
import './scroll-group.style.scss';

interface ScrollGroupProps {
  orientation?: 'vertical' | 'horizontal';
  theme: string;
  children: React.ReactNode;
}

const ScrollGroup = forwardRef<HTMLDivElement, ScrollGroupProps>(
  ({ orientation = 'vertical', theme, children }, ref) => {
    const contentGroupRef = useRef<HTMLDivElement>(null);
    const [fullHeightContent, setFullHeightContent] = useState(0);

    useEffect(() => {
      if (contentGroupRef.current) {
        setFullHeightContent(contentGroupRef.current.scrollHeight);
      }
    }, [children]);

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
