import express from 'express';
import log4js from 'log4js';
// import moment from 'moment';
import db from '../../util/db';

let router = express.Router();
let logger = log4js.getLogger();
logger.level = log4js.levels.INFO;

router.all('/', function (req, res, next) {
   try {
      let { date, id } = req.body;
      let d = new Date(parseInt(date));
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      month = `${month}`.length < 2 ? `0${month}` : month;
      let day = d.getDate();
      day = `${day}`.length < 2 ? `0${day}` : day;

      let formatDate = `${year}-${month}-${day}`.trim();
      let sql = `select * from taxi where id='${id}' and date like '${formatDate}%'`;

      db(sql, (err, rows) => {
         res.end(JSON.stringify(rows));
      });
   } catch(error) {
      logger.error(error);
      res.end(error);
   }
});

export default router;