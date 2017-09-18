import React, {Component} from 'react';
import {connect} from 'react-redux';

class TaxiDistribution extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(mapStateToProps)(TaxiDistribution);