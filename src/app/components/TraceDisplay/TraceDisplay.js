import {getClassSet} from "app/util/ClassNameUtil";
import AppI18n from 'app/config/AppI18n';
import Button from 'app/components/widget/button/Button';
import Util from 'app/util/util';
import Input from 'app/components/widget/input/Input';
import Label from 'app/components/widget/label/Label.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'app/components/TraceDisplay/tracedisplay.scss';

/**
 * Show the trace of taxi.
 */
class TraceDisplay extends Component {
    constructor(props) {
        super(props);

        this.canvas = null;
    }

    componentDidMount() {
        console.log(this.canvas);
    }

    render() {
        let classes = getClassSet(["trace-display"]);

        return (
            <div className={classes}>
                <Label label={Util.getI18n(AppI18n.TRACE_DISPLAY)}/>
                <Input/>
                <Button label={Util.getI18n(AppI18n.SEARCH)}/>
                <div ref={(canvas) => {
                    this.canvas = canvas
                }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

export default connect(mapStateToProps)(TraceDisplay);