const SymptomsModel = require('../models/symptoms.model');
exports.getSymptoms = (req,res)=>{
    SymptomsModel.GetSymptoms((err,symptoms)=>{

      
        if(err)
        res.send(err);
     
        console.log('symptoms ',symptoms);
        res.send(symptoms);
    
    })
}