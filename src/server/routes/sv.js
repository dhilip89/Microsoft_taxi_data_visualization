import * as TraceDisplay from './trace/index';
import info from '../../../config/info.json';

/**
 * 
 * @param {express} app.
 * app.use('', '');
 */
export default function (app) {
   // trace
   app.use(info.sv_trace_getTraceRoute, TraceDisplay.GetTraceRoute);
}