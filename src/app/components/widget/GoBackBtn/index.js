import { getClassSet } from "app/util/ClassNameUtil";
import config from 'app/config/config';
import AppI18n from 'app/config/AppI18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const GoBackBtn = (props) => {
    return (
        <Link to={config.route.home}>
            <div title={AppI18n.GO_BACK}
                className={getClassSet(['go-back-btn'])}
            >
                {"<--"}
            </div>
        </Link>
    );
}

export default GoBackBtn;