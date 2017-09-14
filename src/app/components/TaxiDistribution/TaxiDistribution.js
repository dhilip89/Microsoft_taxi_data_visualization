import React, {Componnet} from 'react';
import {connect} from 'react-redux';

class TaxiDistribution extends Componnet {
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