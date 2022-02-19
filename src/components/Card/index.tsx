import React, {ReactNode} from 'react';

import './style.scss';
import Button from '../Button';

interface Props {
    title?: string
    children: ReactNode
    action?: () => void
    actionLabel?: string | ReactNode
}

const Card = ({
                  children,
                  title,
                  action,
                  actionLabel
              }: Props) => {
    return (
        <div className="card">
            {
                title && (
                    <div className="card-title">
                        <p>{title}</p>
                        {
                            action && (
                                <div>
                                    <Button onClick={action}>{actionLabel}</Button>
                                </div>
                            )
                        }
                    </div>
                )
            }
            {children}
        </div>
    )
};

export default Card;
