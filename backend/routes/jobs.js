const express = require("express");
const JOBS= require('../Schema/JOBSCHEMA')
const router = express.Router();


router.post('/postNews', async(req, res)=>{
    try{
        const Job= new JOBS(
        req.body
    );
    const NewJob= await Job.save();
    res.status(200).json(NewJob);
}catch(err){
    res.status(500).json({err:"Internal Server Error"})
}

})
router.get('/getNews', async(req, res)=>{

        try{
            const allJob= await JOBS.find({$and:[
                {Title:{$regex: req.query.Title, $options:'i'}},
                {Location:{$regex: req.query.Location, $options:'i'}},
                {Type:{$regex: req.query.Type, $options:'i'}},
                {$and:[{'range.0':{$gte: Math.round((12*req.query.rangel)/100)}}, {'range.1':{$lte: Math.round((12*req.query.rangeh)/100)}}]}
            ]});
            console.log(allJob);
            res.status(200).json(allJob);
        }catch(err){
            res.status(500).json({err:"Internal Server Error"})
        }

})







module.exports = router;