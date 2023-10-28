var dbConn = require('../../config/db.config');
 
var BedFloor = function(bedFloor){
    this.id = bedFloor.id;
    this.name = bedFloor.name;
    this.description = bedFloor.description;
    this.created_at = bedFloor.created_at;
}


BedFloor.createBedFloor = (floorData,result)=>{
    dbConn.query('insert into floor set ?',floorData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('floor  inserted Successfully');
            result(null,res)
        }
    })
}

let query = ''
let value = []

BedFloor.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}
BedFloor.getBedFloor = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('floor  fetched ');
            result(null,res);
        }
    })
}
module.exports = BedFloor;