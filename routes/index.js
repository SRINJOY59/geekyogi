var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('GET home page');
  res.sendFile('index.njk');
});

module.exports = router;
