const SymptomsTypeModel = require('../models/symptomsType.model')



exports.createSymptomsType = (req,res)=>{
    const symptomTypeData = new SymptomsTypeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        SymptomsTypeModel.createSymptomsType (symptomTypeData,(err,symptomType)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'   Symptoms Type added successfully',data:symptomType.insertId});

        })
    }
}


exports.getSymptomsType= (req,res)=>{

    let updatedQuery = 'select * from symptoms_classification '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' where symptoms_classification.symptoms_type like ? '
        updatedValue.push('%'+req.query.search+'%')    
    }
    
    SymptomsTypeModel.setQuery(updatedQuery,updatedValue)
    SymptomsTypeModel.getSymptomsType ((err,symptomType)=>{
            if(err)
            res.send(err);
         
            console.log('symptomType ',symptomType);
            res.send(symptomType);
        })
    }