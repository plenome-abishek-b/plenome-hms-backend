const RadiologyNameModel = require('../models/radiologyName.model')

exports.getRadiologyName = (req,res)=>{

    let updatedQuery = 'SELECT * FROM radio'
    let updatedValue=[]
if(req.query.category){
    updatedQuery ='SELECT * FROM radio where radiology_category_id = ?'
    updatedValue.push(req.query.category)
}
RadiologyNameModel.setQuery(updatedQuery,updatedValue)
RadiologyNameModel.getRadiologyName((err,radiologyName)=>{

      
        if(err)
        res.send(err);
     
        console.log('radiologyName ',radiologyName);
        res.send(radiologyName);
    
    })
}