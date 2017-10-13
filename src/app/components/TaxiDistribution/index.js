import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * Show the distribution of taxi.
 */
class TaxiDistribution extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> I am distribution page.</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(mapStateToProps)(TaxiDistribution);