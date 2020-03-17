import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import CoinInfo from './component/CoinInfo/CoinInfo';

const route=
    <Router>
            <Link to="/CoinInfo"></Link>
            <Route exact path="/" component={HomePage}/>
            <Route path="/CoinInfo" component={CoinInfo}/>
    </Router>

ReactDOM.render(
	route,
	document.getElementById('root')
	);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
