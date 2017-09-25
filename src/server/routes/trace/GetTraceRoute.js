import express from 'express';

let router = express.Router();

router.get('/', function (req, res, next) {
   res.setHeader('Content-type', 'text/html');
   res.end();
});

export default router;