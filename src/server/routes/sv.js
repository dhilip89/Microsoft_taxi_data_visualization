import express from 'express';
import path from 'path';
import fs from 'fs';

let router = express.Router();

router.all('/', function (req, res, next) {
   // res.setHeader('Content-type', 'text/html');
   // res.sendFile(path.join(__dirname, '../../../index.html'));

   // idx = req.body.idx;
   // find route from 'info.json'
   // fs.reac(function(data){
      // route
   //})
});

export default router;