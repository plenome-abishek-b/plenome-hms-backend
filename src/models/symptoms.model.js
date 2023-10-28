var dbConn = require('../../config/db.config');

var Symptoms = function(symptoms){
    this.id = symptoms.id
}


Symptoms.GetSymptoms= (result)=>{
    dbConn.query('select * from symptoms',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Symptoms fetched ');
            result(null,res);
        }
    })
}
module.exports = Symptoms