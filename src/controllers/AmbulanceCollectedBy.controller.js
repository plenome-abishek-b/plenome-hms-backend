const AmbulanceCollectedByModel = require('../models/AmbulanceCollectedBy.model');
exports.getcollectedBy = (req,res)=>{
    AmbulanceCollectedByModel.getcollectedBy((err,collectedBy)=>{

      
        if(err)
        res.send(err);
     
        console.log('collectedBy ',collectedBy);
        res.send(collectedBy);
    
    })
}