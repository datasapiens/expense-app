import React, {useEffect} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router';
import {useDispatch} from 'react-redux';

import history from '../../shared/history';
import Layout from '../../components/Layout';

import './App.scss';
import Home from '../Home';
import Graph from '../Graph';
import {initCategories} from '../../stores/actions/app.action';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initCategories());
    }, [dispatch]);

    return (
        <Router history={history}>
            <Layout className="App">
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route exact path="/home" component={() => <Home/>}/>
                    <Route exact path="/graph" component={() => <Graph/>}/>
                    <Redirect from="*/**" to="/home"/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
