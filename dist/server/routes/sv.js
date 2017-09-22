'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _info = require('../../../config/info.json');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sv = _express2.default.Router();
var logger = _log4js2.default.getLogger();
logger.level = _log4js2.default.levels.INFO;

sv.all('/', function (req, res, next) {
   var idx = req.body.idx;

   var route = _info2.default[idx];
   logger.info('request ====> ' + route);

   var func = require('./' + route);
   func(res);

   // func('select * from taxi limit 10', (err, row)=>{
   //    console.log(row);
   // });

   // res.end(`{'day': 'hello world'}`);
});

exports.default = sv;