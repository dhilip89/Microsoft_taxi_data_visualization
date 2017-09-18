import AppI18n from 'app/AppI18n';
import Button from 'app/components/widget/button/Button';
// import TaxiDistribution from 'app/components/TaxiDistribution/TaxiDistribution';
// import TraceDisplay from 'app/components/TraceDisplay/TraceDisplay';
import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button label={AppI18n.HOME_PAGE}/>
                <Button label={AppI18n.TAXI_DISTRIBUTION}/>
                <Button label={AppI18n.TRACE_DISPLAY}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps)(HomePage);