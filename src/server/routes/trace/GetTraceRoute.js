import db from '../../util/db';

let getTraceRoute = function (res, info) {
   db('select * from taxi limit 10', (err, rows) => {
      for(let i = 0; i < rows.length; i++) {
         console.log(rows[i]);
         res.end("==========");
      }
   });
}

module.exports = getTraceRoute;