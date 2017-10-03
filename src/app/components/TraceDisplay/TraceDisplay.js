import {fire} from 'app/data/req';
import {getClassSet} from "app/util/ClassNameUtil";
import {routers} from 'app/config/config';
import {GoBackBtn, DatePicker, Button, Input, Row, Col} from 'app/components/widget';
import moment from 'moment';
import AppI18n from 'app/config/AppI18n';
import Map from 'app/graphic/Map';
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
        this.zrDom = null;
        this.map = null;
        this.success = this.success.bind(this);
        this.drawTrace = this.drawTrace.bind(this);
        this.error = this.error.bind(this);

        this.state = {
            id: null,
            date: moment('2008/02/02', 'YYYY/MM/DD')
        };
    }

    componentDidMount() {
        fire({url: '/data/beijing.json', method: 'get'}, this.success, this.error);
    }

    render() {
        let classes = getClassSet(["trace-display"]);

        return (
            <div className={classes}>
                <Row className={getClassSet(['row'])}>
                    <Col className={getClassSet(['col'])} span={6}>
                        <Row>
                            <Col className={getClassSet(['input-container'])} span={24}>
                                <GoBackBtn />
                            </Col>
                            <Col className={getClassSet(['input-container'])} span={24}>
                                <Input placeholder={AppI18n.INPUT_ID}
                                       className={getClassSet(['commonInput'])}
                                       value={this.state.id}
                                       onChange={(e) => {
                                           this.setState({id: e.target.value})
                                       }}/>
                            </Col>
                            <Col className={getClassSet(['input-container'])} span={24}>
                                <DatePicker className={getClassSet(['date-picker', 'date-picker-input'])}
                                            defaultValue={moment('2008/01/02', 'YYYY/MM/DD')}
                                            value={this.state.date}
                                            onChange={(date, dateString) => {
                                                this.setState({date: date});
                                            }}/>
                            </Col>
                            <Col className={getClassSet(['input-container'])} span={24}>
                                <Button className={getClassSet(['commonInput'])} onClick={(e) => {
                                    let info = {};
                                    info.date = this.state.date && this.state.date.valueOf();
                                    info.id = this.state.id;

                                    fire({
                                            url: routers.sv_trace_getTraceRoute,
                                            method: "post",
                                            data: info
                                        },
                                        this.drawTrace,
                                        this.error
                                    );
                                }}>{AppI18n.SEARCH}</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={getClassSet(['col'])} span={18}>
                        <div className={getClassSet(["canvas"])} ref={(canvas) => {
                            this.canvas = canvas;
                        }}>
                            <div id='zrDom' ref={(dom) => {
                                this.zrDom = dom;
                            }} className={getClassSet(['traceCanvas'])}></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    success(data) {
        // 绘制地图
        this.map = new Map({
            dom: this.canvas,
            zrDom: this.zrDom,
            geojson: data,
        });

        this.map.initZr();
        // this.map.createMap();
        this.map.createLeafletMap();
    }

    drawTrace(data) {
        this.map.disposeZr();
        this.map.initZr();
        data = JSON.parse(data);

        if(data.length == 0) {
            return;
        }

        let input = this.processTraceData(data);
        this.map.drawTrace([input]);

        // let input = {};
        // input.id = data[0].id;
        // // input.trace = data.map((d) => {
        // //     let coord = this.map.projection([d.lat, d.lng]);
        // //     return { x: coord[0], y: coord[1] };
        // // });
        // input.trace = data.map((d) => {
        //     return this.map.map.latLngToContainerPoint([d.lng, d.lat]);
        // });

        // this.map.drawTrace([input]);

        //当地图移动的时候, zrender重绘.
        this.map.map.on('move', () => {
            // this.map.disposeZr();
            // this.map.initZr();
            this.map.clearZr();
            let input = this.processTraceData(data);
            this.map.drawTrace([input]);
        });
    }

    processTraceData(data) {
        let input = {};
        input.id = data[0].id;
        // input.trace = data.map((d) => {
        //     let coord = this.map.projection([d.lat, d.lng]);
        //     return { x: coord[0], y: coord[1] };
        // });
        input.trace = data.map((d) => {
            return this.map.map.latLngToContainerPoint([d.lat, d.lng]);
        });

        return input;
    }

    error(err) {
        console.error(err);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

export default connect(mapStateToProps)(TraceDisplay);