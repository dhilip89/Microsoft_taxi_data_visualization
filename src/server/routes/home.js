/**
 * Home page.
 */
import express from 'express';
import path from 'path';

let router = express.Router();

router.all('/', function (req, res, next) {
   res.setHeader('Content-type', 'text/html');
   res.sendFile(path.join(__dirname, '../../../index.html'));
});

export default router;