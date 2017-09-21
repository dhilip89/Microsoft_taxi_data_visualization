import * as actions from 'app/components/actions';
import {getClassSet} from 'app/util/ClassNameUtil';
import constants from 'app/components/constant';
import AppI18n from 'app/config/AppI18n';
import Button from 'app/components/widget/button/Button';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'app/components/HomePage/homepage.scss';

/**
 * Home page for app.
 */
class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = getClassSet(['homePage']);
        let {clickToOpenHomePage, clickToOpenDistributionPage, clickToOpenTracePage} = this.props;

        return (
            <div className={classes}>
                <Button label={AppI18n.HOME_PAGE} onClick={clickToOpenHomePage}/>
                <Button label={AppI18n.TRACE_DISPLAY} onClick={clickToOpenTracePage}/>
                <Button label={AppI18n.TAXI_DISTRIBUTION} onClick={clickToOpenDistributionPage}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /**
         * Switch to home page.
         * @param {Event} e
         */
        clickToOpenHomePage: (e) => {
            dispatch({
                type: actions.SWITCH_PAGE,
                pageName: constants.homepage
            });
        },
        /**
         * Switch to trace display page.
         * @param {Event} e
         */
        clickToOpenTracePage: (e) => {
            dispatch({
                type: actions.SWITCH_PAGE,
                pageName: constants.traceDisplay
            });
        },
        /**
         * Switch to distribution page.
         * @param {Event} e
         */
        clickToOpenDistributionPage: (e) => {
            dispatch({
                type: actions.SWITCH_PAGE,
                pageName: constants.taxiDistribution
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);