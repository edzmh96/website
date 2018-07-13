import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import edwardApp from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';


const loggerMiddleware = createLogger()
const store = createStore(edwardApp, applyMiddleware(thunkMiddleware, loggerMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
