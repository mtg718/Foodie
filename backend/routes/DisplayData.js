const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_items)
        res.send([global.food_items,global.food_category])// global can be acceseed by anywhere
         
    } catch (error) {
        console.log(error);
        res.send('Internal server errors')
    }
})



module.exports= router;



// Assuming connectdb is a function that fetches data asynchronously
const connectdb = require("../database.js");

router.post("/foodData", async (req, res) => {
  try {
    await connectdb(); // Wait for the data to be fetched
    console.log(global.food_items);
    res.send([global.food_items, global.food_category]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server errors");
  }
});

module.exports = router;
