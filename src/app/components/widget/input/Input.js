import {getClassSet} from 'app/util/ClassNameUtil';
import React, {Component} from 'react';
import 'app/components/widget/input/input.scss';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        let {
            classNames,
            ...restProps
        } = this.props;
        let classes = getClassSet(['input', classNames]);

        return (
            <input onChange={this.onChange} className={classes} {...restProps}/>
        );
    }

    onChange(e) {
        this.props.onChange(e);
    }

    static defaultProps = {
        onChange: (e) => {
        }
    };
}