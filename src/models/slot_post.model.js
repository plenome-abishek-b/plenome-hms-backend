var dbconn = require('../../config/db.config');
const { post } = require('../routes/appointment_Shift.route');
var slot_post = function(posting){
    this.id = posting.id;
    this.day = posting.day;
    this.staff_id = posting.staff_id;
    this.global_shift_id = posting.global_shift_id;
    this.start_time = posting.start_time;
    this.end_time = posting.end_time;
    this.created_at = posting.created_at;
}

let query = ''
let values = []

slot_post.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

slot_post.getslot_post = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('slot post fetched');
            result(null,res);
        }
    })
}

slot_post.createslot_post = (postdata,result)=>{
    console.log(postdata)
    dbconn.query('insert into doctor_shift SET ?',postdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('shift_details inserted successfully');
            result(null,res)
        }
    })
}

slot_post.updateslot_post = (postupdateddata,result)=>{
    dbconn.query(query,[postupdateddata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while updating data');
            result(null,err);
        }else{
            console.log('slot post data updated successfully');
            result(null,res)
        }
    });
}

module.exports = slot_post;