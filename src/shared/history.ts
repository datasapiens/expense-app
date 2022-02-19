import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

let pathname = '';

history.listen((location) => {
    if (location.pathname !== pathname) {
        pathname = location.pathname;
        window.scrollTo(0, 0);
    }
});

export default history;
