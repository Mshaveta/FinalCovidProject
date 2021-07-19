const { Router } = require('express');
const express = require('express');
const route = express.Router();
const inqrySchema =  require('../model/inquiryModel');

//post Method
route.post('/add', async (req, res) => {
     
    //sending the info from client side
    const inquiryPayload = new inqrySchema(
        {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        }
    );     
    
    try {            
            const bodyReq = await inquiryPayload.save();
            //res.json(bodyReq);
            res.send("Inquiry has been added successfully");
            res.status(201).send("Created");

             

    } catch (err) {
        res.status(201).send(err.message)

    }

});

 
module.exports = route;