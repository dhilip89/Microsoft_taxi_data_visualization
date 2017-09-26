'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (query, callback) {
   db.serialize(function () {
      db.all(query, function (err, rows) {
         callback(err, rows);
      });
   });

   // db.close();
};

var _config = require('./config');

var sqlite3 = require('sqlite3');
var sql = sqlite3.verbose();

// Cache in the memory.
var db = new sql.Database(_config.config.dbPath);