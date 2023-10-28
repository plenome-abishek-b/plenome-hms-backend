var dbConn = require('../../config/db.config');

var SymptomsType = function(symptomsType){
    this.id = symptomsType.id;
    this.symptoms_type = symptomsType.symptoms_type;
    this.created_at = symptomsType.created_at;
}

SymptomsType.createSymptomsType = (symptomType,result)=>{
    dbConn.query('insert into symptoms_classification set ?',symptomType,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('symptom type inserted Successfully');
            result(null,res)
        }
    })
}
let query = ''
let value = []

SymptomsType.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}
SymptomsType.getSymptomsType = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Symptoms Type  fetched ');
            result(null,res);
        }
    })
}
module.exports = SymptomsType;