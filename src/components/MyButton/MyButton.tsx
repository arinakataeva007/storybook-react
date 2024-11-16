import React, {FC} from 'react';
import './MyButton.scss';
export interface MyButtonProps{
    color: string;
    children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({children, color,  ...props})=>{
    return (
        <button {...props} className='my-btn'>
            {children}
        </button>
    )
}
export default MyButton;