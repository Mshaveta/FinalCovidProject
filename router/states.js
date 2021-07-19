const { Router } = require('express');
const express = require('express');
const route = express.Router();
 
//Get states Method
route.get('/all',async (req,res)=>{
   // console.log("Get HTTP Method....");
   // res.send("Get HTTP Method....");///display on browser
    try{

        //Create a new models/ schema and then fetch all the records from DB
        const statesData = await db.states.find(); 
        
        console.log(stateData.length);
        res.send(stateData.length);
        // will wair for the find() to come back and then perform some action futher
        //res.send(sampleData);//send method will sned the data in text format
        //to send it in json we use
       
        if(statesData.length==0){
            throw new Error('No Content')
        }else{
            res.json(statesData);
        }
       
    }catch(err){
        res.status(204).send(err.message)
    }
    
});

module.exports = route;