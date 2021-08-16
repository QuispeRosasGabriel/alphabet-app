import React, { FC } from 'react'
import './style.css'

export type ButtonProps = {
    content: string;
    type?: string;
    onClick: () => void;
  };

const Button: FC<ButtonProps> = ({content,type = 'default',onClick}) => {
    return (
        <button className={`button_${type}`} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button
