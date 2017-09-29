import {getClassSet} from "app/util/ClassNameUtil";
import Util from 'app/util/util';
import * as actions from 'app/components/actions';
import constants from 'app/components/constant';
import AppI18n from 'app/config/AppI18n';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import './gobackbtn.scss';

class GoBackBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div title={Util.getI18n(AppI18n.GO_BACK)} className={getClassSet(['go-back-btn'])} onClick={this.props.toHomePage}>{"<--"}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toHomePage: () => {
            dispatch({
                type: actions.SWITCH_PAGE,
                pageName: constants.homepage
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoBackBtn);