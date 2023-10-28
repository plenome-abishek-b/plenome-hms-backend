const PathologyNameModel = require('../models/pathologyName.model')

exports.getPathologyName = (req,res)=>{

    let updatedQuery = 'SELECT * FROM pathology'
    let updatedValue=[]
if(req.query.category){
    updatedQuery ='SELECT * FROM pathology where pathology_category_id = ?'
    updatedValue.push(req.query.category)
}
PathologyNameModel.setQuery(updatedQuery,updatedValue)
PathologyNameModel.getPathologyName((err,pathologyName)=>{

      
        if(err)
        res.send(err);
     
        console.log('pathologyName ',pathologyName);
        res.send(pathologyName);
    
    })
}