import React, {useMemo, useRef, useState} from 'react';
import {ReactComponent as ArrowDown} from "../../assets/icons/down-arrow.svg";

import usePopup from '../../hooks/usePopup';
import {ISelectOptionInterface} from '../../shared/interfaces/global.interface';

import './style.scss';

interface Props {
    value: number | string | undefined | null
    options: ISelectOptionInterface[]
    onChange?: (value: number | string) => void
    className?: string
    color?: 'normal' | 'primary' | 'secondary'
    optionKey?: string
    width?: number
}

const Select = ({
                    value,
                    className,
                    options,
                    optionKey = 'key',
                    onChange = () => null,
                    color = 'normal',
                    width
                }: Props) => {
    const [optionValue, setOptionValue] = useState<number | string | undefined | null>(value);
    const popupRef = useRef(null);
    const {isOpen, toggleMenu, closeMenu} = usePopup(popupRef);

    const selectedOption = useMemo(
        () => options.find((option) => option[optionKey] === optionValue),
        [options, optionValue, optionKey]
    );

    const handleChange = (option: ISelectOptionInterface) => {
        setOptionValue(option[optionKey]);
        onChange && onChange(option[optionKey]);
        closeMenu();
    };

    return (
        <>
            <div className={`select ${className || ''} ${color}`} ref={popupRef}>
                <div className={`select-button ${isOpen ? 'opened' : ''}`} onClick={toggleMenu}
                     style={{...(width && {width: `${width}px`})}}>
                    <p>{selectedOption?.label || ''}</p>
                    <ArrowDown width={12} height={12} className={isOpen ? 'arrow-up' : ''}/>
                </div>
                {
                    isOpen && (
                        <div className="menu">
                            {
                                options.map((option, key) => (
                                    <div
                                        className="menu-item"
                                        key={key}
                                        onClick={() => handleChange(option)}
                                    >
                                        <span>{option.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
};

export default Select
