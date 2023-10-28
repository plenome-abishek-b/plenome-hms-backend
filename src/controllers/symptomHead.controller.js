const SymptomsHeadModel = require('../models/symptomHead.model')

exports.createSymptomsHead = (req,res)=>{
    const headData = new SymptomsHeadModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        SymptomsHeadModel.createSymptomsHead (headData,(err,SymptomsHead)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'  Symptoms Head added successfully',data:SymptomsHead.insertId});

        })
    }
}

exports.getSymptomsHead= (req,res)=>{

    let updatedQuery = ' select symptoms.symptoms_title as symptom_head,symptoms_classification.symptoms_type,symptoms.description from symptoms join symptoms_classification on symptoms_classification.id = symptoms.type  '
    let updatedValue = []
    if(req.query.search){
        updatedQuery += ' where symptoms.symptoms_title like ? or symptoms_classification.symptoms_type like ? or symptoms.description like ? '
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')
        updatedValue.push('%'+req.query.search+'%')

    
    }
    
    SymptomsHeadModel.setQuery(updatedQuery,updatedValue)
    SymptomsHeadModel.getSymptomsHead ((err,head)=>{
            if(err)
            res.send(err);
         
            console.log('head ',head);
            res.send(head);
        })
    }