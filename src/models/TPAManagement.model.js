var dbconn = require('../../config/db.config');
var TPA_management = function(TPA){
    this.id = TPA.id;
    this.organisation_name = TPA.organisation_name;
    this.code = TPA.code;
    this.contact_no = TPA.contact_no;
    this.address = TPA.address;
    this.contact_person_name = TPA.contact_person_name;
    this.contact_person_phone = TPA.contact_person_phone;
    this.created_at = TPA.created_at;
}

let query = ''
let values =[]
TPA_management.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues

}

TPA_management.getTPA_management = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('TPA management');
            result(null,res)
        }
    })
}

TPA_management.createTPA_management = (TPA,result)=>{
    dbconn.query('insert into organisation SET ?',TPA,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('organisation inserted successfully');
            result(null,res);
        }
    })
}

TPA_management.updatedTPA_management = (TPAupdatedata,result)=>{
    dbconn.query(query,[TPAupdatedata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('organisation data updated successfully');
            result(null,res);
        }
    });
}

module.exports = TPA_management;