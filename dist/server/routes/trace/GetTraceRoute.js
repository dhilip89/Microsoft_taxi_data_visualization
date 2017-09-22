'use strict';

var _db = require('../../util/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTraceRoute = function getTraceRoute(res, info) {
   (0, _db2.default)('select * from taxi limit 10', function (err, rows) {
      for (var i = 0; i < rows.length; i++) {
         console.log(rows[i]);
         res.end("==========");
      }
   });
};

module.exports = getTraceRoute;