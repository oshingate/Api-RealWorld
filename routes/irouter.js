var express = require('express');
const Article = require('../models/Article');
var router = express.Router();
let _ = require('lodash');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ hello: 'hello' });
});

module.exports = router;
