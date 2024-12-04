import React, { useEffect, useRef, useState } from 'react';
import ScrollGroup from '../../feature/cells/scroll-group.component'; 
import './pop-up.style.scss';
interface PopUpProps {
  isModal?: boolean;
  scroll?: boolean;
  theme: string;
  children: React.ReactNode;
}

export const PopUp: React.FC<PopUpProps> = ({ isModal = false, scroll = false, theme, children }) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const scrollGroupRef = useRef<HTMLDivElement>(null);
  const [fullHeightContent, setFullHeightContent] = useState(0);

  useEffect(() => {
    if (scrollGroupRef.current) {
      setFullHeightContent(scrollGroupRef.current.scrollHeight);
    }
  }, [children]);
  const classes = [
    'popUp-container',
    scroll ? 'popUp-with-scroll' : '',
    !isModal ? 'resizing' : '',
  ].join(' ');

  useEffect(() => {
    if (popUpRef.current && scrollGroupRef.current) {
      popUpRef.current.style.maxHeight = `${fullHeightContent + 16}px`;
    }
  }, [fullHeightContent]);

  return (
    <div ref={popUpRef} className={`popUp-container ${classes}`}>
      <ScrollGroup ref={scrollGroupRef} orientation="vertical" theme={theme}>
        <div style={{ display: 'contents' }}>
          {children}
        </div>
      </ScrollGroup>
    </div>
  );
};

export default PopUp;
