import React, {ReactNode} from 'react';

import './style.scss';

interface Props {
    children: ReactNode
    onClick?: () => void
    className?: string
    color?: 'primary' | 'normal'
    disabled?: boolean
}

const Button = ({
                    children,
                    onClick,
                    className,
                    color = 'primary',
                    disabled
                }: Props) => {
    return (
        <button className={`app-button ${className ? className : ''} ${color}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
};

export default Button;
