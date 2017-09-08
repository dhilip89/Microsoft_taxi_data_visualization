'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// ----------------- my modules ---------------------------------


var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _config = require('../../config/config.json');

var _config2 = _interopRequireDefault(_config);

var _home = require('./routes/home');

var _home2 = _interopRequireDefault(_home);

var _sv = require('./routes/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// --------------------------------------------------

var App = function () {
   function App() {
      _classCallCheck(this, App);

      this.logger = _log4js2.default.getLogger();
      this.logger.level = _log4js2.default.levels.INFO;
   }

   _createClass(App, [{
      key: 'run',
      value: function run() {
         var self = this;
         var app = (0, _express2.default)();

         // view engine setup
         app.set('views', _path2.default.join(__dirname, 'views'));
         app.set('view engine', 'jade');

         app.use((0, _morgan2.default)('dev'));
         app.use(_bodyParser2.default.json());
         app.use(_bodyParser2.default.urlencoded({ extended: false }));
         app.use((0, _cookieParser2.default)());
         app.use(_express2.default.static(_path2.default.join(__dirname, '../../dist/app'))); //编译文件
         // app.use(express.static(path.join(__dirname, '../../config'))); //配置文件

         //----------------- use router----------------------------
         app.use('/', _home2.default);
         app.use('/req', _sv2.default);
         //--------------------------------------------------------

         // catch 404 and forward to error handler
         app.use(function (req, res, next) {
            self.logger.error('Not Found');
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
         });

         // error handler
         app.use(function (err, req, res, next) {
            self.logger.error(err);
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
         });

         _http2.default.createServer(app).listen(_config2.default.port);
         self.logger.info('listening on port ' + _config2.default.port + '...');
      }
   }]);

   return App;
}();

exports.default = App;