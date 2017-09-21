import {getClassSet} from 'app/util/ClassNameUtil';
import Util from 'app/util/util';
import React, {Component} from 'react';
import 'app/components/widget/label/label.scss';

export default class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            classNames,
            label,
            ...restProps
        } = this.props;
        let classes = getClassSet(['label', classNames]);

        return (
            <div className={classes} {...restProps}>
                {Util.getI18n(label)}
            </div>
        );
    }
}