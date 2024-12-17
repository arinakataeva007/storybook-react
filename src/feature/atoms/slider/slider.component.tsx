import React, { useRef, useState, useEffect } from 'react';
import './slider.style.scss';

interface SliderComponentProps {
  theme: string;
  disabled: boolean;
  onSendProgress?: (value: string) => void;
}

export const SliderComponent: React.FC<SliderComponentProps> = ({
  theme,
  disabled,
  onSendProgress,
}) => {
  const scrollbarRef = useRef<HTMLInputElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState('0%');

  useEffect(() => {
    updateScrollTrack();
  }, []);

  const updateScrollTrack = () => {
    if (scrollbarRef.current && scrollTrackRef.current) {
      const value = scrollbarRef.current.value;
      setTrackWidth(`${value}%`);
      if(onSendProgress){
        (onSendProgress) (value);
      }
    }
  };

  const onInput = () => {
    updateScrollTrack();
  };


  const classes = disabled
    ? `slider--${theme} slider--disabled--${theme}`
    : `slider--${theme}`;


  return (
    <div className={`slider-container ${classes}`}>
      <input
        ref={scrollbarRef}
        onInput={onInput}
        disabled={disabled}
        type="range"
        className="slider"
        id="myRange"
      />
      <div ref={scrollTrackRef} className="scroll-div" style={{ width: trackWidth }} />
    </div>
  );
};

export default SliderComponent;