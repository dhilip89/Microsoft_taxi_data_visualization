import * as actions from 'app/components/actions';
import { getClassSet } from 'app/util/ClassNameUtil';
import { Button } from 'app/components/widget/index';
import config from 'app/config/config';
import constants from 'app/components/constant';
import AppI18n from 'app/config/AppI18n';
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

/**
 * Home page for app.
 */
@connect(mapStateToProps)
export default class HomePage extends Component {
    constructor(props) {
        super(props);

        let { clickToOpenHomePage, clickToOpenDistributionPage, clickToOpenTracePage } = this.props;
        this.btnsModel = [
            // {
            //     event: clickToOpenHomePage,
            //     label: AppI18n.HOME_PAGE,
            //     // route: config.route.home
            // },
            {
                event: clickToOpenTracePage,
                label: AppI18n.TRACE_DISPLAY,
                route: config.route.traceDisplay
            },
            {
                event: clickToOpenDistributionPage,
                label: AppI18n.TAXI_DISTRIBUTION,
                route: config.route.traceDistribution
            }
        ];
    }

    componentWillMount() {
        let btnClasses = getClassSet(['btn']);

        this.btns = this.btnsModel.map((btn, i) => {
            return (
                <Link to={btn.route} key={`btn-${i}`}>
                    <Button className={btnClasses}>
                        {btn.label}
                    </Button>
                </Link>
            );
        })
    }

    render() {
        let classes = getClassSet(['homePage']);

        return (
            <div className={classes}>
                {this.btns}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};