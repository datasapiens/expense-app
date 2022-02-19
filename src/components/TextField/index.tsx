import React from 'react';

import './style.scss';

interface Props {
    value?: string | number | undefined | null
    onChange?: (e: any) => void
    className?: string
    placeholder?: string
    type?: string
    width?: number
    disabled?: boolean
}

const TextField = ({
                       value,
                       className,
                       onChange = () => null,
                       placeholder,
                       type = 'text',
                       width,
                       disabled,
                   }: Props) => {
    return (
        <div
            className={`text-field-input ${className || ''} ${value ? 'filled' : 'empty'} ${!placeholder ? 'no-placeholder' : ''}`}
        >
            {
                placeholder && (
                    <span className="placeholder">
            {placeholder}
          </span>
                )
            }
            <input
                type={type}
                value={value || ''}
                onChange={onChange}
                style={{...(width && {width: `${width}px`})}}
                disabled={disabled}
            />
        </div>
    )
};

export default TextField
