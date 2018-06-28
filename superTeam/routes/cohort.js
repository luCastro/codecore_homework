const express = require('express');
const router = express.Router();
const knex = require("../db/client");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cohort');
});

module.exports = router;
