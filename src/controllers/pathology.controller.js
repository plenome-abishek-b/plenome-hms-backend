const PathologyModel = require('../models/pathology.model');
exports.getPathology = (req,res)=>{
   
    PathologyModel.getPathology((err,pathology)=>{
        if(err)
        res.send(err);

        console.log('pathology names ',pathology);
        res.send(pathology);
    })

} 