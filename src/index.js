import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App></App>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
