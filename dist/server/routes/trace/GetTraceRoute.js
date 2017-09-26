'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _db = require('../../util/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// import moment from 'moment';

var logger = _log4js2.default.getLogger();
logger.level = _log4js2.default.levels.INFO;

router.all('/', function (req, res, next) {
   try {
      var _req$body = req.body,
          date = _req$body.date,
          id = _req$body.id;

      var d = new Date(parseInt(date));
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      month = ('' + month).length < 2 ? '0' + month : month;
      var day = d.getDate();
      day = ('' + day).length < 2 ? '0' + day : day;

      var formatDate = (year + '-' + month + '-' + day).trim();
      var sql = 'select * from taxi where id=\'' + id + '\' and date like \'' + formatDate + '%\'';

      (0, _db2.default)(sql, function (err, rows) {
         res.end(JSON.stringify(rows));
      });
   } catch (error) {
      logger.error(error);
      res.end(error);
   }
});

exports.default = router;