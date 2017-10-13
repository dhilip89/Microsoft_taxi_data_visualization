import * as actions from 'app/components/actions';
import config from 'app/config/config';
import Constant from 'app/components/constant'
import HomePage from 'app/components/HomePage';
import TraceDisplay from 'app/components/TraceDisplay';
import TaxiDistribution from 'app/components/TaxiDistribution';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'app/style/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.Page = null;
    }

    render() {
        let route = config.route;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path={route.home} component={HomePage} />
                    <Route path={route.traceDisplay} component={TraceDisplay} />
                    <Route path={route.traceDistribution} component={TaxiDistribution} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps)(App);