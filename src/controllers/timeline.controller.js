const timelineModel = require('../models/timeline.model');

exports.createTimeline = (req,res)=>{
    const timelineData = new timelineModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            timelineModel.crateTimeline(timelineData,(err,timeline)=>{
                if(err)
                res.send(err);
                res.json({status:true,message:' timeline added successfully',data:timeline.insertId});
    
            })
        }
}

exports.getTimeline = (req,res)=>{
    timelineModel.getTimeline((err,timeline)=>{
        if(err)
    res.send(err);
 
    console.log('timeline ',timeline);
    res.send(timeline);
    })
}