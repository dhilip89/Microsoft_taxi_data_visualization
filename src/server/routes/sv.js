import express from 'express';
import path from 'path';
import info from '../../../config/info.json';

let sv = express.Router();
sv.all('/', function (req, res, next) {
   res.end();
});

export default sv;