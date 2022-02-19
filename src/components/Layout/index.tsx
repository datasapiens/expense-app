import React, {ReactNode} from 'react';
import {useHistory, useLocation} from 'react-router';

import {ReactComponent as GraphIcon} from '../../assets/icons/analytics.svg';
import {ReactComponent as ArrowLeftIcon} from '../../assets/icons/arrow-left.svg';
import './style.scss'

interface LayoutProps {
    children: ReactNode;
    className: string;
}

const Layout = ({children, className = ''}: LayoutProps) => {
    const history = useHistory();
    const location = useLocation();

    const wrapperClasses = ['wrapper'];
    if (className) {
        wrapperClasses.push(className);
    }

    const handleNavigate = () => {
        if (location.pathname === '/graph') {
            history.push('/');
        } else {
            history.push('/graph');
        }
    };

    return (
        <div className={wrapperClasses.join(' ')}>
            <div className="app-header">
                <span>Test</span>
                <button className="graph-button" onClick={handleNavigate}>
                    {
                        location.pathname === '/graph' ? (
                            <>
                                <ArrowLeftIcon width={24} height={24} fill="#fff"/>
                                <span>Back</span>
                            </>
                        ) : (
                            <>
                                <GraphIcon width={24} height={24} fill="#fff"/>
                                <span>Graph</span>
                            </>
                        )
                    }
                </button>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;
