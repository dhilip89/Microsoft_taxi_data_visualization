import { config } from './config';

var sqlite3 = require('sqlite3');
let sql = sqlite3.verbose();

let db = new sql.Database(config.dbPath);

export default function (query, callback) {
   db.serialize(function () {
      db.all(query, (err, rows) => {
         callback(err, rows);
      });
   });

   db.close();
}