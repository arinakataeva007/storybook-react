import React, { useState } from "react";
import PopUp from "../pop-up/pop-up.component";
import BaseButton from "../../buttons/base-button/base-button.component";
import { ThemeProps } from "../../../shared/defaultProps";
import './rich-tooltip.style.scss';
export interface RichTooltipProps extends ThemeProps {
  textRich: string;
  tailPlacement: "R" | "D" | "U" | "L";
  onHandleCloseClick: (event: boolean) =>{};
}
export const RichTooltip: React.FC<RichTooltipProps> = ({
  theme = "light-theme",
  textRich,
  tailPlacement = "D",
  onHandleCloseClick
}) => {
  const [text, setText] = useState(textRich);
  let [isClose, setClose] = useState(false);

  const handleCloseClick = () =>{
    if(onHandleCloseClick){
      onHandleCloseClick(!isClose);
    }
    setClose(isClose = !isClose);
  }

  const getClasses = (): string[] => {
    let placement = '';
		switch (tailPlacement) {
			case 'R':
				placement = 'place-R';
				break;
			case 'D':
				placement = 'place-D';
				break;
			case 'U':
				placement = 'place-U';
				break;
			case 'L':
				placement = 'place-L';
		}
		return [`tooltip-${theme}`, placement]
  };

  return (
    <section className={`rich-tooltip ${getClasses().join(" ")}`}>
      <PopUp theme={theme}>{<div className="tooltip-info">{text}</div>}</PopUp>
      <BaseButton
        size="base"
        name="close"
        isOwner={true}
        theme={theme}
        onAction={handleCloseClick}
      />
      <div className="rich-tooltip__tail"></div>
    </section>
  );
};
