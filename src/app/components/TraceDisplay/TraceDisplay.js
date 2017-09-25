import { fire } from 'app/data/req';
import { getClassSet } from "app/util/ClassNameUtil";
import { info } from 'app/graphic/config';
import { DatePicker, Button, Input, Row, Col } from 'app/components/widget/index';
import AppI18n from 'app/config/AppI18n';
import Map from 'app/graphic/Map';
import Util from 'app/util/util';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'app/components/TraceDisplay/tracedisplay.scss';

/**
 * Show the trace of taxi.
 */
class TraceDisplay extends Component {
    constructor(props) {
        super(props);

        this.canvas = null;
        this.success = this.success.bind(this);
        this.drawTrace = this.drawTrace.bind(this);
        this.error = this.error.bind(this);
    }

    componentDidMount() {
        fire({ url: '/data/beijing.json', method: 'get' }, this.success, this.error);
    }

    render() {
        let classes = getClassSet(["trace-display"]);

        return (
            <div className={classes}>
                <Row className={getClassSet(['row'])}>
                    <Col className={getClassSet(['col'])} span={6}>
                        <Row>
                            <Col span={24}>
                                <Input />
                            </Col>
                            <Col span={24}>
                                <DatePicker />
                            </Col>
                            <Col span={24}>
                                <Button>{Util.getI18n(AppI18n.SEARCH)}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={getClassSet(['col'])} span={18}>
                        <div className={getClassSet(["canvas"])} ref={(canvas) => {
                            this.canvas = canvas;
                        }}></div>
                    </Col>
                </Row>
            </div>
        );
    }

    success(data) {
        // 绘制地图
        let map = new Map({
            dom: this.canvas,
            geojson: data,
        });

        map.createMap();
        map.drawTrace([
            {
                id: 100, trace: [
                    { x: 100, y: 200 },
                    { x: 300, y: 400 },
                    { x: 500, y: 120 },
                    { x: 300, y: 200 }
                ]
            }
        ]);

        //绘制轨迹
        fire({ url: info.sv_trace_getTraceRoute, method: "post" }, this.drawTrace, this.error);
    }

    drawTrace(data) {
        console.log(data);
    }

    error(err) {
        console.error(err);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

export default connect(mapStateToProps)(TraceDisplay);