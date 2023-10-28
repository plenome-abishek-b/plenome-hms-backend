var dbConn = require('../../config/db.config');
var Nurse_note = function(nurse_note){
    this.id = nurse_note.id;
    this.date = nurse_note.date;
    this.ipd_id = nurse_note.ipd_id;
    this.staff_id = nurse_note.staff_id;
    this.note = nurse_note.note;
    this.comment = nurse_note.comment;
    this.updated_at = nurse_note.updated_at;

}
Nurse_note.createNurse_note = (nurse_note_data,result)=>{
    dbConn.query('insert into nurse_note SET ?',nurse_note_data,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('nurse note Data inserted Successfully');
            result(null,res)
        }
    });
}
Nurse_note.getNurse_note = (result)=>{
    dbConn.query('SELECT * FROM nurse_note',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('nurse_note fetched ');
            result(null,res);
        }
    })
}
module.exports = Nurse_note;