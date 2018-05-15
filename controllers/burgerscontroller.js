var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
// ROUTES
router.get('/', function (req, res) {
  res.redirect('/index');
});
// BURGER SENT TO DOM
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});
// NEW BURGER
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});
// CONSUME BURGER
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});
module.exports = router;