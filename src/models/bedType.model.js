var dbConn = require('../../config/db.config');

var BedType = function(bedType){
    this.id = bedType.id;
    this.name = bedType.name;
    this.created_at = bedType.created_at;
}

BedType.createBedType = (typeData,result)=>{
    dbConn.query('insert into bed_type set ?',typeData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('bed_type  inserted Successfully');
            result(null,res)
        }
    })
}


let query = ''
let value = []

BedType.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}
BedType.getBedType = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('bed type  fetched ');
            result(null,res);
        }
    })
}
module.exports = BedType;