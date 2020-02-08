var express = require('express');
var router = express.Router();
const PumpPin = require('../brokers/PumpPin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/bd/insert', function (req, res) {
  PumpPin.insert({allo: 'allo'},(err, objects) => {
    console.log(err);
    console.log(objects);
    res.status(200);
  });
});

module.exports = router;
