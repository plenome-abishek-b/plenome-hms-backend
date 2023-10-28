var dbconn = require('../../config/db.config');
var patientType = function(type){
    this.id = type.id;
}

let query = '';
let values = ['']

patientType.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

patientType.getPatientType = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('type fetched');
            result(null,res);

        }
    })
}



module.exports = patientType;