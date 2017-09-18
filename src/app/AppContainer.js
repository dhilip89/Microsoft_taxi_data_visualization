import App from 'app/App';
import reducer from 'app/components/reducer';
import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducer);

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