'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../../util/db');

var _db2 = _interopRequireDefault(_db);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var logger = _log4js2.default.getLogger();
logger.level = _log4js2.default.levels.INFO;

router.all('/', function (req, res, next) {
   try {
      var result = [];
      (0, _db2.default)('select * from taxi limit 10', function (err, rows) {
         res.end(JSON.stringify(rows));
      });
   } catch (error) {
      logger.error(error);
      res.end(error);
   }
});

exports.default = router;