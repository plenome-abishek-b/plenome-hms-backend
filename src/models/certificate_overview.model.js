var dbconn = require('../../config/db.config');
var certificate = function(certific){
    this.id = certific.id;
}

let query = ''
let values = []
certificate.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

certificate.getcertificate = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured');
            result(null,err);
        }else{
            console.log('certificate fetched');
            result(null,res);
        }
    })
}

module.exports = certificate;