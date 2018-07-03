const express = require('express');
const router = express.Router();
const knex = require("../db/client");

/* GET home page. */

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/', (req, res)=>{
  
  knex.insert({
    imgUrl: req.body.imgUrl,
    name:req.body.name,
    members: req.body.members,
  })
  .into("cohort")
  .returning("*")
  .then(([cohort])=>{
    console.log("Cohort insert result:", cohort);
    res.redirect(`cohort/${cohort.id}`)
  });
});

router.get("/:id", (req, res)=>{
   const method = req.query.method;
   const quantity = req.query.quantity;
  knex
  .select("*")
  .from("cohort")
  .where({id: req.params.id})
  .then(([cohort])=>{

    // res.render('cohort', { cohort: cohort });
    let cohortShow = [];
   
    let membersArr  = cohort.members.split(',').map(x => x.trim());
    let indexShuffle = Math.floor(Math.random() * membersArr.length);
    let temp;
    let sliceWay;
    const team = [];
    
    // console.log(membersArr);

    for(let i=0; i< membersArr.length; i++){
      temp = membersArr[i]
      membersArr[i] = membersArr[indexShuffle];
      membersArr[indexShuffle] = temp;
    }; 

    // console.log(membersArr);

    if(method === "numberPerTeam"){
        sliceWay = parseInt(quantity);
    } else {
        sliceWay = parseInt(membersArr.length/parseInt(quantity));      
    }
    // console.log(sliceWay);

    for(let j= 0; j < membersArr.length; j+=sliceWay){
      team.push(membersArr.slice(j, j+sliceWay));
    }

    // console.log(team);

    res.render("cohort", {cohort, team, quantity});

  });

  router.get("/", (req, res)=>{
     
      knex.select("*")
      .from("cohort")
      .then(cohort =>{
        res.render("index", { cohort });
      });
  });


});


module.exports = router;

