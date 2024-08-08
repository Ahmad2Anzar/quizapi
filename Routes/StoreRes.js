const express = require('express');
const router = express.Router();
const prevQuiz = require('../Models/prevQuiz');

router.post("/StoreQuiz", async function(req, res) {

  try {
    let arr=[]
    let user = await prevQuiz.findOne({ email: req.body.email });
    console.log(req.body);
    
    if (user) {
      await prevQuiz.findOneAndUpdate(
        { email: req.body.email },
        { $push: { prev_data: req.body.prev_Quiz } }
      );
    } else {
      await prevQuiz.create({
        email: req.body.email,
        prev_data: arr
      });
      await prevQuiz.findOneAndUpdate(
        { email: req.body.email },
        { $push: { prev_data: req.body.prev_Quiz } }
      );
    }
    res.send("Quiz stored successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred.");
  }
});

module.exports = router;
