import * as d3 from 'd3';
import config from 'app/graphic/config';
import zrender from 'zrender/src/zrender';
import Circle from 'zrender/src/graphic/shape/Circle';
import Group from 'zrender/src/container/Group';
import PathTool from 'zrender/src/tool/path';

/**
 * Draw map using zrender and d3.
 */
class Map {
    constructor(opts) {
        this.projection = null;
        this.dom = opts.dom;
        this.geojson = opts.geojson;

        if(!this.dom) {
            throw new Error("not dom element.");
            return;
        }

        if(!this.geojson) {
            throw new Error("not geojson");
            return;
        }

        this.zr = zrender.init(this.dom, {
            width: getComputedStyle(this.dom).width.replace('px', ''),
            height: getComputedStyle(this.dom).height.replace('px', '')
        });
    }

    createMap() {
        if(!this.zr) {
            throw new Error("zrender init error");
        }

        let g = new Group();
        this.zr.add(g);
        this.projection = d3.geoMercator()
            .center([116.5, 40.5])
            .scale(20000);
        let path = d3.geoPath()
            .projection(this.projection);

        let features = this.geojson.features;

        for(let i = 0; i < features.length; i++) {
            let p = PathTool.createFromString(path(features[i]), {
                style: {
                    lineWidth: 1,
                    stroke: 'rgba(120, 120, 120, 0.8)'
                }
            });

            g.add(p);
        }

        return this;
    }

    /**
     * [{id: id, trace:[{x, y}]}]
     * @param {Array[{id: id, trace:[{x, y}]}]} data 
     */
    drawTrace(data, opts) {
        if(!this.zr) {
            throw new Error("zrender init error");
        }

        let g = new Group();
        this.zr.add(g);
        this.zr.configLayer(config.traceLevel, {
            motionBlur: true,
            lastFrameAlpha: 0.97
        });

        for(let i = 0; i < data.length; i++) {
            let { id, trace } = data[i];
            let c = new Circle({
                shape: {
                    cx: trace[0].x,
                    cy: trace[0].y,
                    r: 1.5
                },
                style: {
                    fill: 'yellow'
                },
                zlevel: config.traceLevel,
                silent: true
            });

            let animator = null;

            if(trace[1]) {
                animator = c.animateShape(true)
                    .when(config.traceTime, {
                        cx: trace[1].x,
                        cy: trace[1].y
                    });
            }

            if(trace[2]) {
                for(let j = 2; j < trace.length; j++) {
                    animator.when(config.traceTime * j, {
                        cx: trace[j].x,
                        cy: trace[j].y
                    });
                }
            }

            if(animator) {
                animator.start();
            }

            this.zr.add(c);
        }
    }
}

export default Map;