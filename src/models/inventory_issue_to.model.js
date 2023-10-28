var dbconn = require('../../config/db.config');

var issue_to = function(issue){
    this.id = issue.id;
}

issue_to.getissue_to = (result)=>{
    dbconn.query('select * from staff',(err,res)=>{
     if(err){
        console.log('error occured',err);
        result(null,err);
     }else{
        console.log('issue to fetched from staff');
        result(null,res);
     }
    })
}

module.exports = issue_to;