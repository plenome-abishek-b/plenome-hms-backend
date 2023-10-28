var dbconn = require('../../config/db.config');
var consultation_duration = function(duration){
    this.id = duration.id;
}

let query = ''
let values = [''];
consultation_duration.setQuery = (updatedQuery,updatedvalues)=>{
    query = updatedQuery;
    values = updatedvalues;
}

consultation_duration.getconsultation = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('consultation fetched');
            result(null,res);
        }
    })

}

module.exports = consultation_duration;