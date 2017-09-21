import App from 'app/App';
import reducer from 'app/components/reducer';
import React, {Component} from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

const loggerMiddleware = createLogger({collapsed: true});
const store = createStore(
    reducer,
    composeWithDevTools(),
    applyMiddleware(loggerMiddleware)
);

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}