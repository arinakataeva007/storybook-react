import React, { FC } from 'react';
import './MyButton.scss';
export interface MyButtonProps {
    color: string;
    children: React.ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
