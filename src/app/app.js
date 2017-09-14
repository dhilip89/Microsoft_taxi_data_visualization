import Viewer from './components/viewer/Viewer';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Viewer />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    };
};

export default connect(mapStateToProps)(App);