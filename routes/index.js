var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FLOOD WATCH' });
});

router.get('/responders', function(req, res, next) {
  res.render('responders', { title: 'FLOOD WATCH' });
});

module.exports = router;
