import * as actions from 'app/components/actions';
// import config from 'app/config/config';
import Constant from 'app/components/constant'
import HomePage from 'app/components/HomePage/HomePage';
import TraceDisplay from 'app/components/TraceDisplay/TraceDisplay';
import TaxiDistribution from 'app/components/TaxiDistribution/TaxiDistribution';
import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'app/style/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.Page = null;
        this._pressToSwitchPage = this._pressToSwitchPage.bind(this);
    }

    componentDidMount() {
        // document.addEventListener('keydown', this._pressToSwitchPage);
    }

    componentWillUnmount() {
        // document.removeEventListener('keydown', this._pressToSwitchPage);
    }

    render() {
        let Page = this._switchPage(this.props.pageName);

        return (
            <TraceDisplay />
        );
    }

    _switchPage(pageName) {
        switch(pageName) {
            case Constant.homepage:
                this.Page = HomePage;
                break;
            case Constant.traceDisplay:
                this.Page = TraceDisplay;
                break;
            case Constant.taxiDistribution:
                this.Page = TaxiDistribution;
                break;
            default:
            // Page = HomePage;
        }

        return this.Page;
    }

    _pressToSwitchPage(e) {
        this.props.keyToSwitchPage(e.key);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pageName: state.pageName
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        keyToSwitchPage: (pageName) => {
            dispatch({
                type: actions.SWITCH_PAGE,
                pageName: parseInt(pageName)
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);