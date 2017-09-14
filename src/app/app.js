import * as actions from './components/actions';
import Constant from './components/constant'
import HomePage from './components/HomePage/HomePage';
import TraceDisplay from './components/TraceDisplay/TraceDisplay';
import TaxiDistribution from './components/TaxiDistribution/TaxiDistribution';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {pageName} = this.props;
        let page;

        switch (pageName) {
            case Constant.homepage:
                page = HomePage;
                break;
            case Constant.traceDisplay:
                page = TraceDisplay;
                break;
            case Constant.taxiDistribution:
                page = TaxiDistribution;
            default:
                page = null;
        }

        return (
            <page/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pageName: state.pageName
    };
};

export default connect(mapStateToProps)(App);