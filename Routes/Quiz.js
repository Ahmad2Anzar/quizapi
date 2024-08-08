const express=require('express');
const router=express.Router();
const prevQuiz= require('../Models/prevQuiz');

router.post("/prevQuiz",  async function(req,res){
    try{
        let user = await prevQuiz.findOne({ email: req.body.email });
        if(user){
            res.send(user.prev_data);
        }
        else{
            res.send([]);
        }
    
    }catch(error){
        console.log(error);
    }



})


module.exports = router;