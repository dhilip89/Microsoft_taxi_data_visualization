import {getClassSet} from 'app/util/ClassNameUtil';
import Util from 'app/util/util';
import React, {Component} from 'react';
import 'app/components/widget/button/button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        let {
            classNames,
            label,
            ...restProps
        } = this.props;
        let classes = getClassSet(['button', classNames]);

        return (
            <div onClick={this.onClick} className={classes} {...restProps}>
                {Util.getI18n(label)}
            </div>
        );
    }

    onClick(e) {
        this.props.onClick(e);
    }

    static defaultProps = {
        onClick: (e) => {
        }
    }
}