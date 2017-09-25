import express from 'express';
import db from '../../util/db';
import log4js from 'log4js';

let router = express.Router();
let logger = log4js.getLogger();
logger.level = log4js.levels.INFO;

router.all('/', function (req, res, next) {
   try {
      let result = [];
      db('select * from taxi limit 10', (err, rows) => {
         res.end(JSON.stringify(rows));
      });
   } catch(error) {
      logger.error(error);
      res.end(error);
   }
});

export default router;