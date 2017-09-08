'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _info = require('../../../config/info.json');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sv = _express2.default.Router();
sv.all('/', function (req, res, next) {
   res.end();
});

exports.default = sv;