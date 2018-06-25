const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {
    res.render('quizzr', {username: req.cookies.username});
  });


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
router.post('/', (req, res)=> {
  //res.json(req.body);
  const obj = {
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    question6: req.body.question6,
    question7: req.body.question7,
    question8: req.body.question8,
    question9: req.body.question9,
    question10: req.body.question10
    
  }
  const resultArr = ["option2", "option1","option2","option1","option4", "option3", 
  ["option3", "option4"],["option2", "option4"], ["option1", "option3"],
  ["option1", "option2", "option3", "option4"]];
  let result=0;
  let i = 0;
  let answer;
  for (question in obj){ 
      answer = obj[question];

      if(answer.toString() == resultArr[i].toString()){
          result+=1;
        }
        i++;
    }
    result = result * 10;

   res.cookie("ble", result, {maxAge: COOKIE_MAX_AGE});
  
   res.redirect("/quizzr/result");
  
});

router.get('/result', (req, res)=>{
  
  res.render('result', {result: req.cookies.ble});
});
  
  module.exports = router;
  