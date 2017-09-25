'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  // trace
  app.use(_info2.default.sv_trace_getTraceRoute, TraceDisplay.GetTraceRoute);
};

var _index = require('./trace/index');

var TraceDisplay = _interopRequireWildcard(_index);

var _info = require('../../../config/info.json');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }