var express = require('express');
var router = express.Router();

/* GET computation result. */
router.get('/', function(req, res, next) {
  var x = Math.random() * 200 - 100;

  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  var y = Math.abs(x);
  res.send(`Math.abs applied to ${x} is ${y}`);
});

module.exports = router;