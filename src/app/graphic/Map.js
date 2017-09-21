import * as d3 from 'd3';
import zrender from 'zrender/src/zrender';
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

        if (!this.dom) {
            throw new Error("not dom element.");
            return;
        }

        if (!this.geojson) {
            throw new Error("not geojson");
            return;
        }

        this.zr = zrender.init(this.dom, {
            width: getComputedStyle(this.dom).width.replace('px', ''),
            height: getComputedStyle(this.dom).height.replace('px', '')
        });
    }

    createMap() {
        if (!this.zr) {
            throw new Error("zrender init error");
        }

        let g = new Group();
        this.zr.add(g);
        this.projection = d3.geoMercator()
            .center([117, 40.5])
            .scale(15000);
        let path = d3.geoPath()
            .projection(this.projection);

        let features = this.geojson.features;

        for (let i = 0; i < features.length; i++) {
            let p = PathTool.createFromString(path(features[i]), {
                style: {
                    lineWidth: 1,
                    stroke: 'white'
                }
            });

            g.add(p);
        }

        return this;
    }

    drawTrace(data) {
        if(!this.zr) {
            throw new Error("zrender init error");
        }
    }
}

export default Map;