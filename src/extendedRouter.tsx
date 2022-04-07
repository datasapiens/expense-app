import React from "react";
import { Router } from "react-router-dom";

interface ExtendedRouterProps {
    children : React.ReactNode
    history: any
}

function ExtendedRouter({children, history}: ExtendedRouterProps): JSX.Element {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history} />
    );
}

export default ExtendedRouter;