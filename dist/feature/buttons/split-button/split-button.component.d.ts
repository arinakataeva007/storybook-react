import React, { ReactNode } from 'react';
import './split-button.style.scss';
interface SplitButtonSegmentProps {
    size?: string;
    theme: string;
    onSendState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: ReactNode;
}
declare const SplitButtonSegment: React.FC<SplitButtonSegmentProps>;
export default SplitButtonSegment;
