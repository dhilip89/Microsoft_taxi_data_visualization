import {fire} from 'app/data/req';
import Constant from 'app/components/constant'
import HomePage from 'app/components/HomePage/HomePage';
import TraceDisplay from 'app/components/TraceDisplay/TraceDisplay';
import TaxiDistribution from 'app/components/TaxiDistribution/TaxiDistribution';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'app/style/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Page = this._switchPage();

        return (
            <Page fire={fire}/>
        );
    }

    _switchPage() {
        let {pageName} = this.props;
        let Page;

        switch (pageName) {
            case Constant.homepage:
                Page = HomePage;
                break;
            case Constant.traceDisplay:
                Page = TraceDisplay;
                break;
            case Constant.taxiDistribution:
                Page = TaxiDistribution;
                break;
            default:
                Page = HomePage;
        }

        return Page;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        pageName: state.pageName
    };
};

export default connect(mapStateToProps)(App);