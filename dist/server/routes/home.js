'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Home page.
 */
var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  res.setHeader('Content-type', 'text/html');
  res.sendFile(_path2.default.join(__dirname, '../../../index.html'));
});

exports.default = router;