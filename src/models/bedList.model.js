var dbConn = require('../../config/db.config');

var BedList = function(bedList){
    this.id = bedList.id;
    this.name = bedList.name;
    this.bed_type_id = bedList.bed_type_id;
    this.bed_group_id = bedList.bed_group_id;
    this.is_active = bedList.is_active;
    this.created_at = bedList.created_at
}

BedList.createBedList = (listData,result)=>{
    dbConn.query('insert into bed set ?',listData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('bed  inserted Successfully');
            result(null,res)
        }
    })
}

let query = ''
let value = []

BedList.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

BedList.getBedList = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('bed  fetched ');
            result(null,res);
        }
    })
}


BedList.updateBedList = (BedListUpdateData,result)=>{
    dbConn.query(query,[BedListUpdateData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('Bed List Data updated Successfully');
            result(null,res)
        }
    });
}
module.exports = BedList;