import App from 'app/App';
import reducer from 'app/components/reducer';
import React, { Component } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const loggerMiddleware = createLogger({ collapsed: true });
const store = createStore(
    reducer,
    composeWithDevTools(),
    applyMiddleware(loggerMiddleware)
);

const AppContainer = (props) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default AppContainer;