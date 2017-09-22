import express from 'express';
import log4js from 'log4js';
import path from 'path';
import info from '../../../config/info.json';

let sv = express.Router();
let logger = log4js.getLogger();
logger.level = log4js.levels.INFO;

sv.all('/', function (req, res, next) {
   let { idx } = req.body;
   let route = info[idx];
   logger.info(`request ====> ${route}`);

   let func = require(`./${route}`);
   func(res);

   // func('select * from taxi limit 10', (err, row)=>{
   //    console.log(row);
   // });

   // res.end(`{'day': 'hello world'}`);
});

export default sv;