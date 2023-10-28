var dbConn = require('../../config/db.config');

var BedGroup = function(bedGroup){
    this.id = bedGroup.id;
    this.name = bedGroup.name;
    this.color = bedGroup.color;
    this.description = bedGroup.description;
    this.floor = bedGroup.floor;
    this.is_active = bedGroup.is_active;
    this.created_at = bedGroup.created_at;
}

BedGroup.createBedGroup = (groupData,result)=>{
    dbConn.query('insert into bed_group set ?',groupData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('bed group  inserted Successfully');
            result(null,res)
        }
    })
}

let query = ''
let value = []

BedGroup.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

BedGroup.getBedGroup = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('bed Group  fetched ');
            result(null,res);
        }
    })
}
module.exports = BedGroup;