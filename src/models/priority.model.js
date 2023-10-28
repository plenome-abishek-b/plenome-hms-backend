var dbConn = require('../../config/db.config');
var Priority = function(priority){
    this.id = priority.id;
    this.appoint_priority = priority.appoint_priority;
    this.created_at = priority.created_at;
}
Priority.createPriority = (priorityData,result)=>{
    dbConn.query('insert into appoint_priority SET ?',priorityData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('priority Data inserted Successfully');
            result(null,res)
        }
    });
}

Priority.getPriority = (result)=>{
    dbConn.query('SELECT * FROM appoint_priority',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('appoint_priority fetched ');
            result(null,res);
        }
    })
}

module.exports = Priority;