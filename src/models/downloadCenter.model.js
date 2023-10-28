var dbconn = require('../../config/db.config');
var content = function(list){
    this.id = list.id;
    this.title = list.title;
    this.type = list.type;
    this.is_public = list.is_public;
    this.file = list.file;
    this.note = list.note;
    this.date = list.date;
    this.is_active = list.is_active;
    this.created_by = list.created_by;
    this.created_at = list.created_at;
}

let query = ''
let values = []
content.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

content.getcontent = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured');
            result(null,err);
        }else{
            console.log('content fetched');
            result(null,res);
        }
    })
}

content.createcontent = (content,result)=>{
    dbconn.query('insert into contents SET ?',content,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('contents inserted successfully');
            result(null,res);
        }
    })
}

module.exports = content;