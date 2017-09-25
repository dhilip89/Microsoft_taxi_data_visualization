import * as actions from 'app/components/actions';
import { getClassSet } from 'app/util/ClassNameUtil';
import { Button } from 'app/components/widget/index';
import constants from 'app/components/constant';
import AppI18n from 'app/config/AppI18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        let { clickToOpenHomePage, clickToOpenDistributionPage, clickToOpenTracePage } = this.props;

        return (
            <div className={classes}>
                <Button onclick={clickToOpenHomePage}>{AppI18n.HOME_PAGE}</Button>
                <Button onclick={clickToOpenTracePage}>{AppI18n.TRACE_DISPLAY}</Button>
                <Button onclick={clickToOpenDistributionPage}>{AppI18n.TAXI_DISTRIBUTION}</Button>
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