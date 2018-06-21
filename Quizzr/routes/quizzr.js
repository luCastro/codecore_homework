const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {
    res.render('quizzr');
  });


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
router.post('/', (req, res)=> {

  const question1 = req.body.question1; 
  
  let result;
   if(question1 === "option4"){
      result = "It is correct";
   }else{
      result = "Try again";
   }

  res.cookie("ble", result, {maxAge: COOKIE_MAX_AGE});
  
  res.redirect("/quizzr/result");
  
});

router.get('/result', (req, res)=>{
  
  res.render('result', {result: req.cookies.ble});
});
  
  module.exports = router;
  