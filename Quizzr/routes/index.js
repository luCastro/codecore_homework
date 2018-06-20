const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
router.post('/form', (req, res)=> {

  const username = req.body.username;

  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  res.redirect("/quizzr");

});

module.exports = router;





