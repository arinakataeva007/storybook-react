import { theme } from "antd";
import React, { useEffect, useRef, useState } from "react";
import PopUp from "../pop-up/pop-up.component";
import BaseButton from "../../buttons/base-button/base-button.component";
import { ThemeProps } from "../../../shared/defaultProps";
import './rich-tooltip.style.scss';
interface RichTooltipProps extends ThemeProps {
  textRich: string;
  tailPlacement: "R" | "D" | "U" | "L";
}
export const RichTooltip: React.FC<RichTooltipProps> = ({
  theme = "light-theme",
  textRich,
  tailPlacement = "D",
}) => {
  const [text, setText] = useState(textRich);
  const [isClose, setClose] = useState(false);

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
      />
      <div className="rich-tooltip__tail"></div>
    </section>
  );
};
