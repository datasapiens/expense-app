import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};

const composedEnhancers = compose(
    applyMiddleware(thunk),
);

export default createStore(rootReducer, initialState, composedEnhancers);
