import {getClassSet} from "app/util/ClassNameUtil";
import AppI18n from 'app/config/AppI18n';
import Button from 'app/components/widget/button/Button';
import Map from 'app/graphic/Map';
import Util from 'app/util/util';
import Input from 'app/components/widget/input/Input';
import Label from 'app/components/widget/label/Label.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'app/components/TraceDisplay/tracedisplay.scss';
import Circle from 'zrender/src/graphic/shape/Circle';

/**
 * Show the trace of taxi.
 */
class TraceDisplay extends Component {
    constructor(props) {
        super(props);

        this.canvas = null;
    }

    componentDidMount() {
        this.props.fire({
            url: '/data/beijing.json'
        }, this);
    }

    render() {
        let classes = getClassSet(["trace-display"]);

        return (
            <div className={classes}>
                <Label classNames={"title"} label={Util.getI18n(AppI18n.TRACE_DISPLAY)}/>
                <div className={getClassSet(["control"])}>
                    <Input/>
                    <Button label={Util.getI18n(AppI18n.SEARCH)}/>
                </div>
                <div className={getClassSet(["canvas"])} ref={(canvas) => {
                    this.canvas = canvas
                }}>
                </div>
            </div>
        );
    }

    success(data) {
        let map = new Map({
            dom: this.canvas,
            geojson: data
        });

        map.createMap();
    }

    error(err) {
        console.error(err);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

export default connect(mapStateToProps)(TraceDisplay);