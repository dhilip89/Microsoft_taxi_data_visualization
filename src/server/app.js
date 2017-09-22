import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import log4js from 'log4js';

// ----------------- my modules ---------------------------------
import config from '../../config/config.json';
import home from './routes/home';
import sv from './routes/sv';
// --------------------------------------------------

export default class App {
    constructor() {
        this.logger = log4js.getLogger();
        this.logger.level = log4js.levels.INFO;
    }

    run() {
        let self = this;
        let app = express();

        // view engine setup
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'jade');

        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, '../../dist/app'))); //编译文件
        app.use("/data", express.static(path.join(__dirname, '../../data'))); // 数据文件
        app.use("/config", express.static(path.join(__dirname, '../../config'))); //配置文件

        //----------------- use router----------------------------
        app.use('/', home);
        app.use('/req', sv);
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

        http.createServer(app).listen(config.port);
        self.logger.info(`listening on port ${config.port}...`);
    }
}